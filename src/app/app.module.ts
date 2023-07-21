import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { SliderComponent } from './components/slider/slider.component';
import { SwatchPickerComponent } from './components/swatch-picker/swatch-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SwatchPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
