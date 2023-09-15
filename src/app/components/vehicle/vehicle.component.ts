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
  sheen:number = 0;
}
