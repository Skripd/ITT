import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
  ],
  providers: [fakeBackendProvider, ChartDataPipe],
  entryComponents: [AppComponent],
})
export class AppModule {

  // Bootstrap the angular application a bit later to allow the loading screen to display.
  ngDoBootstrap(app) {
    // setTimeout(() => {
      app.bootstrap(AppComponent);
    // }, 3000);
  }
}
