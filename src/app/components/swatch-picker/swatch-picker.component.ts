import { Component } from '@angular/core';


@Component({
  selector: 'app-swatch-picker',
  templateUrl: './swatch-picker.component.html',
  styleUrls: ['./swatch-picker.component.css']
})
export class SwatchPickerComponent {

  public palette = [{
    name: 'black',
    color: "#000"
  },{
    name: 'red',
    color: "#FF0000"
  }
  ]
}
