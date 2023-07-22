import { Component } from '@angular/core';
import {Swatch, Palette} from "../../types/swatch";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
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

  public body: Palette = {
      brightness: 136,
      sepia: 100,
      hue_rotate: 165,
      saturation: 95,
      contrast: 100,
      opacity:  100,
      metallic: false
  };

  public hood: Palette = {
    brightness: 136,
    sepia: 100,
    hue_rotate: 165,
    saturation : 95,
    contrast: 100,
    opacity:  100,
    metallic: false
  };

  //todo: now create a sliders component that will bind to hood or body

  applyTemplate(swatch: Swatch){
    this.body.brightness = swatch.brightness;
    this.body.sepia = swatch.sepia;
    this.body.hue_rotate = swatch.hue_rotate;
    this.body.saturation = swatch.saturation;
    this.body.contrast = swatch.contrast;
    this.body.opacity = swatch.opacity;
    this.body.metallic = swatch.metallic;

  }
}
