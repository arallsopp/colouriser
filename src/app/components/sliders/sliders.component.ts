import {Component, Input} from '@angular/core';
import {Palette, Swatch} from "../../types/swatch";

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent {
  public swatches: Swatch[] = [
    {
      name: 'Wedgewood',
      color: '#99bdcc',
      brightness: 136,
      sepia: 100,
      hue_rotate: 165,
      saturation: 95,
      contrast: 100,
      opacity: 100,
      metallic: false
    },{
      name: 'Red',
      color: '#820002',
      brightness: 52,
      sepia: 100,
      hue_rotate: 309,
      saturation: 357,
      contrast: 168,
      opacity: 100,
      metallic: false
    }, {
      name: 'Yellow',
      color: '#ffc007',
      brightness: 122,
      sepia: 100,
      hue_rotate: 5,
      saturation: 237,
      contrast: 126,
      opacity: 100,
      metallic: false
    },{
      name: 'Black',
      color: '#000',
      brightness: 21,
      sepia: 100,
      hue_rotate: 359,
      saturation: 1,
      contrast: 106,
      opacity: 100,
      metallic: false
    },{
      name: 'B R G',
      color: '#062a02',
      brightness: 48,
      sepia: 100,
      hue_rotate: 45,
      saturation: 123,
      contrast: 182,
      opacity: 100,
      metallic: true
    },{
      name: 'Valencia',
      color: '#022a2c',
      brightness: 43,
      sepia: 100,
      hue_rotate: 143,
      saturation: 244,
      contrast: 116,
      opacity: 100,
      metallic: true
    },{
      name: 'White',
      color: '#f0f2ee',
      brightness: 48,
      sepia: 100,
      hue_rotate: 0,
      saturation: 0,
      contrast: 0,
      opacity: 0,
      metallic: false
    }
  ];

  @Input() title: string = 'Title';

  @Input() part: Palette = {
    brightness: 136,
    sepia: 100,
    hue_rotate: 165,
    saturation: 95,
    contrast: 100,
    opacity:  100,
    metallic: false
  };

  constructor(){
      this.part.brightness = 136;
      this.part.sepia = 100;
      this.part.hue_rotate = 165;
      this.part.saturation = 95;
      this.part.contrast = 100;
      this.part.opacity = 100;
      this.part.metallic = false;
  };

  applyTemplate(swatch: Swatch){
    this.part.brightness = swatch.brightness;
    this.part.sepia = swatch.sepia;
    this.part.hue_rotate = swatch.hue_rotate;
    this.part.saturation = swatch.saturation;
    this.part.contrast = swatch.contrast;
    this.part.opacity = swatch.opacity;
    this.part.metallic = swatch.metallic;
  }
}
