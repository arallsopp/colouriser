import {Component, Input, Output,EventEmitter} from '@angular/core';
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
      brightness: 127,
      hue_rotate: 199,
      saturation: 203,
      contrast: 87,
      opacity: 31
    },{
      name: 'Red',
      color: '#820002',
      brightness: 72,
      hue_rotate: 0,
      saturation: 80,
      contrast: 149,
      opacity: 100
    }, {
      name: 'Yellow',
      color: '#ffc007',
      brightness: 173,
      hue_rotate: 59,
      saturation: 298,
      contrast: 146,
      opacity: 79
    },{
      name: 'Black',
      color: '#000',
      brightness: 84,
      hue_rotate: 76,
      saturation: 0,
      contrast: 200,
      opacity: 100
    },{
      name: 'B R G',
      color: '#062a02',
      brightness: 63,
      hue_rotate: 76,
      saturation: 80,
      contrast: 149,
      opacity: 100
    },{
      name: 'Valencia',
      color: '#022a2c',
      brightness: 47,
      hue_rotate: 177,
      saturation: 216,
      contrast: 136,
      opacity: 100
    },{
      name: 'White',
      color: '#f0f2ee',
      brightness: 127,
      hue_rotate: 199,
      saturation: 203,
      contrast: 87,
      opacity: 0
    }
  ];

  @Input() title: string = 'Title';

  @Input() part: Palette = {
    brightness: 136,
    hue_rotate: 165,
    saturation: 95,
    contrast: 100,
    opacity:  100
  };

  @Output() sendPalette: EventEmitter<Palette> = new EventEmitter<Palette>()

  constructor(){
      this.part.brightness = 136;
      this.part.hue_rotate = 165;
      this.part.saturation = 95;
      this.part.contrast = 100;
      this.part.opacity = 100;
  };

  applyTemplate(swatch: Swatch){
    this.part.brightness = swatch.brightness;
    this.part.hue_rotate = swatch.hue_rotate;
    this.part.saturation = swatch.saturation;
    this.part.contrast = swatch.contrast;
    this.part.opacity = swatch.opacity;
  }

  copyPalette(){
    this.sendPalette.emit(this.part);
  }
}
