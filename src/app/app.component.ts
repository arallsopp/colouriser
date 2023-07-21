import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colouriser';
  public body_brightness: number = 136;
  public body_sepia: number = 100
  public body_hue_rotate: number = 165;
  public body_saturation: number = 95;
  public body_contrast: number = 100;
  public body_opacity: number = 100;
  public body_metallic: boolean = false;

  applyTemplate(name: string){
    switch(name){
      case 'wedgewood':
        this.body_brightness = 136;
        this.body_sepia = 100;
        this.body_hue_rotate = 165;
        this.body_saturation = 95;
        this.body_contrast = 100;
        this.body_opacity = 100;
        this.body_metallic = false;
        break;
      case 'red':
        this.body_brightness = 52;
        this.body_sepia = 100;
        this.body_hue_rotate = 309;
        this.body_saturation = 357;
        this.body_contrast = 168;
        this.body_opacity = 100;
        this.body_metallic = false;
        break;
      case 'yellow':
        this.body_brightness = 122;
        this.body_sepia = 100;
        this.body_hue_rotate = 5;
        this.body_saturation = 237;
        this.body_contrast = 126;
        this.body_opacity = 100;
        this.body_metallic = false;
        break;
      case 'black':
        this.body_brightness = 21;
        this.body_sepia = 100;
        this.body_hue_rotate = 359;
        this.body_saturation = 1;
        this.body_contrast = 106;
        this.body_opacity = 100;
        this.body_metallic = false;
        break;
    }
  }
}
