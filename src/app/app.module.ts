import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { LogpageComponent } from './logpage/logpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { FundraiserCardComponent } from './fundraiser-card/fundraiser-card.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartDataPipe } from './chart-data.pipe';

import { fakeBackendProvider } from './fake-backend-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { DetailPieChartComponent } from './detailpage/detail-pie-chart/detail-pie-chart.component';
import { TransactionWizardComponent } from './transaction-wizard/transaction-wizard.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LogpageComponent,
    DetailpageComponent,
    NotfoundpageComponent,
    FundraiserCardComponent,
    ChartDataPipe,
    DetailPieChartComponent,
    TransactionWizardComponent,
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    fakeBackendProvider,
    ChartDataPipe,
    {
      provide: KeycloakService,
      useValue: keycloakService
    },
  ],
  entryComponents: [AppComponent],
})
export class AppModule {

  // Defer bootstrapping until keycloak has initialized.
  ngDoBootstrap(appRef: ApplicationRef) {
    keycloakService
    .init({
      initOptions: {
        onLoad: 'check-sso',
        enableLogging: true,
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
      },
      config: {
        clientId: 'itt-client',
        realm: 'itt',
        url: 'http://localhost:8080/auth',
      }
    })
    .then((loggedin) => {
      console.log(`[NgDoBootstrap] Keycloak initialized Bootstrapping App`);

      loggedin ? appRef.bootstrap(AppComponent) : keycloakService.login({
        redirectUri: window.location.origin + '/',
      });
      // appRef.bootstrap(AppComponent);
    })
    .catch(error => console.error(`[NgDoBootstrap] Keycloak Initializer Failed`, error));
  }
}
