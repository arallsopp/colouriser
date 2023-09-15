import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-swatch-picker',
  templateUrl: './swatch-picker.component.html',
  styleUrls: ['./swatch-picker.component.css']
})
export class SwatchPickerComponent {
  @Output() changed = new EventEmitter<string>()

  color: string = '#000';

  setPaint(color: string){
    this.color = color;
    this.changed.emit(this.color)
  }

  public palette = [{
    name: 'Black',
    color: "#000"
  },{
    name: 'Maple Brown',
    color: "#674e26"
  },{
    name: 'Russet Brown',
    color: "#864721"
  },{
    name: 'Sienna Brown',
    color: "#855A25"
  },{
    name: 'Dolphin Grey',
    color: "#828FA0"
  },{
    name: 'Gunmetal Grey',
    color: "#6C7177"
  },{
    name: 'Phantom Grey',
    color: "#818487"
  },{
    name: 'Slate Grey',
    color: "#667988"
  },{
    name: 'Leyland White',
    color: "#f1ffff"
  },{
    name: 'Burgundy',
    color: "#762315"
  },{
    name: 'Carmine',
    color: "#C10010"
  },{
    name: 'Cherry',
    color: "#8a0e35"
  },{
    name: 'Matador',
    color: "#C61E1E"
  },{
    name: 'Magenta',
    color: "#7A2A6F"
  },{
    name: 'Pimento',
    color: "#F22917"
  },{
    name: 'Scarlet',
    color: "#9C1C13"
  },{
    name: 'Signal',
    color: "#BB0200"
  },{
    name: 'Vermilion',
    color: "#e64916"
  },{
    name: 'Inca',
    color: "#FFE641"
  },{
    name: 'Jasmin',
    color: "#FCFDB0"
  },{
    name: 'Jonquil',
    color: "#e3cb9b"
  },{
    name: 'Mimosa',
    color: "#F5C53C"
  },{
    name: 'Saffron',
    color: "#FFD020"
  },{
    name: 'Topaz',
    color: "#EE7831"
  },{
    name: 'Cactus',
    color: "#D3E0C8"
  },{
    name: 'Conifer',
    color: "#072522"
  },{
    name: 'Java',
    color: "#009E74"
  },{
    name: 'BRG',
    color: "#007955"
  },{
    name: 'French Blue',
    color: "#7396CC"
  },{
    name: 'Royal Blue',
    color: "#152439"
  },
{
    name: 'Tahiti',
    color: "#003bd1"
  },
{
    name: 'Valencia',
    color: "#134F71"
  },
{
    name: 'Wedgewood',
    color: "#C2DEF4"
  },
{
    name: 'Damson',
    color: "#470F1C"
  }
  ]
}
