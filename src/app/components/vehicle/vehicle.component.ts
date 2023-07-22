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


}
