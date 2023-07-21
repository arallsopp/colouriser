import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colouriser';
  public body_brightness: number = 100;

  getBodyStyle(): string{
    return 'mix-blend-mode: multiply; font-weight: ' + this.body_brightness + '; filter: brightness: ' + (this.body_brightness) + '%'
  }
}
