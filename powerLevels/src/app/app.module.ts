import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PowerLevelComponent } from './power-level/power-level.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerLevelComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
