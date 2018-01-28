import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { StartButtonComponent } from './start-button/start-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LandingSliderComponent,
    StartButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
