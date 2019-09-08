import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogpageComponent } from './logpage/logpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'log', component: LogpageComponent },
  { path: 'detail', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NotfoundpageComponent },
  { path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
