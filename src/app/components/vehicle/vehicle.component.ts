import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit{

  title:string = 'Colouriser';
  roofColour:string = '#000000';
  bodyColour:string = '#000000';
  sync:boolean = true;
  sheen:number = 0;
  brightness:number = 0;
  last:string = 'body';
  activeTabIndex = 0;

  constructor() { }

  ngOnInit() {
    // get param
    let urlParams =  new URL(window.location.toLocaleString()).searchParams;
    if(urlParams.has('b')){
      this.bodyColour = '#' + <string>urlParams.get('b');
      this.activeTabIndex = 1;
    }
    this.sync = !urlParams.has('r');

    if(this.sync) {
      this.activeTabIndex = 1;
      this.roofColour = this.bodyColour;
    }else{
      this.roofColour = '#' + <string>urlParams.get('r');
    }
  }

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

  setActive(component: string){
    /* tells the palette which component its setting if its not in pair mode */
    this.last = component;
  }
  updateColours():void{
    console.log('updating colours');
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

}
