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
      color: '#99bdcc',
      brightness: 136,
      sepia: 100,
      hue_rotate: 165,
      saturation: 95,
      contrast: 100,
      opacity: 100,
      metallic: false
    },{
    name: 'red',
      color: '#820002',
      brightness: 52,
      sepia: 100,
      hue_rotate: 309,
      saturation: 357,
      contrast: 168,
      opacity: 100,
      metallic: false
    }, {
      name: 'yellow',
      color: '#ffc007',
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
},{
      name: 'brg',
      color: '#062a02',
      brightness: 48,
      sepia: 100,
      hue_rotate: 45,
      saturation: 123,
      contrast: 182,
      opacity: 100,
      metallic: true
    }
  ];

  title = 'colouriser';

  public brightness: number = 136;
  public sepia: number = 100
  public hue_rotate: number = 165;
  public saturation: number = 95;
  public contrast: number = 100;
  public opacity: number = 100;
  public metallic: boolean = false;

  applyTemplate(swatch: Swatch){
    this.brightness = swatch.brightness;
    this.sepia = swatch.sepia;
    this.hue_rotate = swatch.hue_rotate;
    this.saturation = swatch.saturation;
    this.contrast = swatch.contrast;
    this.opacity = swatch.opacity;
    this.metallic = swatch.metallic;

  }
}
