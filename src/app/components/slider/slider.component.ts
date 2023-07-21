import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() max: number;
  @Input() min: number;
  @Input() label: string;
  @Output() valueChange = new EventEmitter<number>();

  public value: number;


  constructor() {
    this.max = 100;
    this.min = 0;
    this.label = 'property';
    this.value = 0;
  }
}