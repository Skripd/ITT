import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogpageComponent } from './logpage/logpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { GenericGuard } from './auth/generic.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Use Authguard on /home to GUARANTEE to GraphQL module keycloak is initialized and logged in.
  // tslint:disable-next-line: max-line-length
  { path: 'home', loadChildren: () => import('./graphql/graphql.module').then(m => m.GraphQLModule), component: HomepageComponent, canActivate: [GenericGuard] },
  { path: 'log', component: LogpageComponent, canActivate: [GenericGuard], data: { roles: ['admin'] }},
  { path: 'detail', redirectTo: '/home', pathMatch: 'full', canActivate: [GenericGuard] },
  { path: 'detail/:id', component: DetailpageComponent, canActivate: [GenericGuard] },
  { path: '404', component: NotfoundpageComponent, canActivate: [GenericGuard] },
  { path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
