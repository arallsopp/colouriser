import { Component } from '@angular/core';
import {Swatch, Palette} from "../../types/swatch";
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";



@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  title = 'colouriser';

  public body: Palette = {
      brightness: 127,
      hue_rotate: 199,
      saturation: 146,
      contrast: 87,
      opacity:  31
  };

  public hood: Palette = {
    brightness: 127,
    hue_rotate: 199,
    saturation: 146,
    contrast: 87,
    opacity:  31
  };

  getFilterStyle(part: Palette): string{
    let filter: string = 'brightness(' + part.brightness + '%) ' +
                 'hue-rotate(' + part.hue_rotate + 'deg) ' +
                 'saturate(' + part.saturation + '%) ' +
                 'contrast(' + part.contrast + '%) ' +
                 'opacity(' + part.opacity + '%)';
    console.log('filter is', filter);
    return filter;
  }
}
