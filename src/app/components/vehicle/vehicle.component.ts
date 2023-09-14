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
  roofColour = '#DBED64';
  bodyColour = '#DBED64';

}
