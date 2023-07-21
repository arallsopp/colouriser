import { Component } from '@angular/core';
import {Swatch} from "./types/swatch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public swatches: Swatch[] = [
    {
      name: 'wedgewood',
      color: 'red',
      brightness: 136,
      sepia: 100,
      hue_rotate: 165,
      saturation: 95,
      contrast: 100,
      opacity: 100,
      metallic: false
    },{
    name: 'red',
      color: 'red',
      brightness: 52,
      sepia: 100,
      hue_rotate: 309,
      saturation: 357,
      contrast: 168,
      opacity: 100,
      metallic: false
    }, {
      name: 'yellow',
      color: 'yellow',
      brightness: 122,
      sepia: 100,
      hue_rotate: 5,
      saturation: 237,
      contrast: 126,
      opacity: 100,
      metallic: false
},{
    name: 'black',
      color: '#000',
    brightness: 21,
    sepia: 100,
    hue_rotate: 359,
    saturation: 1,
    contrast: 106,
    opacity: 100,
    metallic: false
}
  ];


  title = 'colouriser';
  public body_brightness: number = 136;
  public body_sepia: number = 100
  public body_hue_rotate: number = 165;
  public body_saturation: number = 95;
  public body_contrast: number = 100;
  public body_opacity: number = 100;
  public body_metallic: boolean = false;

  applyTemplate(name: string){

  }
}
