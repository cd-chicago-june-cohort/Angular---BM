import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { WeatherService } from './weather.service';

import { AppComponent } from './app.component';

import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DcComponent } from './dc/dc.component';



@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    BurbankComponent,
    DallasComponent,
    SanjoseComponent,
    SeattleComponent,
    DcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }