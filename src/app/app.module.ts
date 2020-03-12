import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LocaleDetailsComponent } from './components/locale-details/locale-details.component';
import { EditLocaleComponent } from './components/edit-locale/edit-locale.component';
import { AvailableSignComponent } from './components/shared/available-sign.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteLocaleComponent } from './components/delete-locale/delete-locale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LocaleDetailsComponent,
    EditLocaleComponent,
    AvailableSignComponent,
    DeleteLocaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
