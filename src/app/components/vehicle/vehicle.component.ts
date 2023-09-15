import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  title:string = 'colouriser';
  roofColour:string = '#DBED64';
  bodyColour:string = '#DBED64';
  sync:boolean = true;
  sheen:number = 0;
  brightness:number = 0;

  getBrightness():number{

    let components = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.bodyColour);

    if(components) {
      let r = parseInt(components[1], 16);
      let g = parseInt(components[2], 16);
      let b = parseInt(components[3], 16);

      this.brightness = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
      );
    }else {
      this.brightness = 0;
    }

    if(this.brightness < 128){
      this.sheen =((128 - this.brightness)/128) * 33;
    }else {
      this.sheen = 0.1;
    }
    return this.brightness;

    //ideally, we work out if its very saturated, and if it is we set the blend mode to color-dodge instead.
    //perhaps thats another layer.
  }
}
