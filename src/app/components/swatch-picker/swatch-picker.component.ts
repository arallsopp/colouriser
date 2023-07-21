import { Component, Input } from '@angular/core';
import {Swatch} from "../../types/swatch";

@Component({
  selector: 'app-swatch-picker',
  templateUrl: './swatch-picker.component.html',
  styleUrls: ['./swatch-picker.component.css']
})
export class SwatchPickerComponent {
  @Input() swatch?: Swatch
}
