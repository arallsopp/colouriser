import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colouriser';
  public body_brightness: number = 69;
  public body_sepia: number = 0;


}
