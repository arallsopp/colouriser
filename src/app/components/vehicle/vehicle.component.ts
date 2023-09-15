import { Component } from '@angular/core';

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
  last:string = 'body';

  setColor(color: string){
    if(this.sync){
      this.bodyColour = color;
      this.roofColour = color;
    }else{
      if (this.last == 'body'){
        this.bodyColour = color;
      }else{
        this.roofColour = color;
      }
    }
  }
  updateColours():void{
    if (this.sync){
      this.roofColour = this.bodyColour;
    }
  }
  getBlendMode():string{
    /* returns the preferred class for the overlay, basically choosing whether to blend as overlay or not based upon brightness of palette choice.*/
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

    return (this.brightness > 50 ? 'overlay':'screen');
  }
  getBrightness():number{

    if(this.sync){
      this.roofColour = this.bodyColour;
    }

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
