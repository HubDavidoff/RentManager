import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LocaleDetailsComponent } from './components/locale-details/locale-details.component';
import { EditLocaleComponent } from './components/edit-locale/edit-locale.component';
import { HomePageService } from './services/home-page.service';


const routes: Routes = [

  {path:'index', component: HomePageComponent},
  {path:'locale-details/:id', component: LocaleDetailsComponent},
  {path:'edit-locale/:id', component: EditLocaleComponent},

  {path: '', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
