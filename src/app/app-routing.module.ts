import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LocaleDetailsComponent } from './components/locale-details/locale-details.component';


const routes: Routes = [

  {path:'index', component: HomePageComponent},
  {path:'locale-details/:id', component: LocaleDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
