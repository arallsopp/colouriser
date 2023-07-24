import { Component } from '@angular/core';
import {Swatch, Palette} from "../../types/swatch";

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


}
