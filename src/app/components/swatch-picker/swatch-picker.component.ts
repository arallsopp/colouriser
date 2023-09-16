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
    color: "#000",
    codes: '11'
  },{
    name: 'Maple Brown',
    color: "#674e26",
    codes: '73, 83'
  },{
    name: 'Russet Brown',
    color: "#864721",
    codes: '93, 203'
  },{
    name: 'Sienna Brown',
    color: "#855A25",
    codes: '23'
  },{
    name: 'Dolphin Grey',
    color: "#828FA0",
    codes: '48'
  },{
    name: 'Gunmetal Grey',
    color: "#6C7177",
    codes: '18'
  },{
    name: 'Phantom Grey',
    color: "#818487",
    codes: '38'
  },{
    name: 'Slate Grey',
    color: "#667988",
    codes: '68'
  },{
    name: 'Leyland White',
    color: "#f1ffff",
    codes: '19, 206'

  },{
    name: 'Burgundy',
    color: "#762315",
    codes: '42'
  },{
    name: 'Carmine',
    color: "#C10010",
    codes: '82, 209'
  },{
    name: 'Cherry',
    color: "#8a0e35",
    codes: '22'
  },{
    name: 'Matador',
    color: "#C61E1E",
    codes: '12'
  },{
    name: 'Magenta',
    color: "#7A2A6F",
    codes: '92'
  },{
    name: 'Pimento',
    color: "#F22917",
    codes: '72, 204'
  },{
    name: 'Scarlet',
    color: "#9C1C13",
    codes: '52'
  },{
    name: 'Signal',
    color: "#BB0200",
    codes: '32'
  },{
    name: 'Vermilion',
    color: "#e64916",
    codes: '118'
  },{
    name: 'Inca',
    color: "#FFE641",
    codes: '94, 207'
  },{
    name: 'Jasmin',
    color: "#FCFDB0",
    codes: '34'
  },{
    name: 'Jonquil',
    color: "#e3cb9b",
    codes: '14'
  },{
    name: 'Mimosa',
    color: "#F5C53C",
    codes: '64'
  },{
    name: 'Saffron',
    color: "#FFD020",
    codes: '64'
  },{
    name: 'Topaz',
    color: "#EE7831",
    codes: '84'
  },{
    name: 'Cactus',
    color: "#D3E0C8",
    codes: '15'
  },{
    name: 'Conifer',
    color: "#072522",
    codes: '25'
  },{
    name: 'Java',
    color: "#009E74",
    codes: '85, 205'
  },{
    name: 'BRG',
    color: "#007955",
    codes: '55'
  },{
    name: 'French Blue',
    color: "#7396CC",
    codes: '126'
  },{
    name: 'Royal Blue',
    color: "#152439",
    codes: '56, 156'
  },
{
    name: 'Tahiti',
    color: "#003bd1",
    codes: '146'
  },
{
    name: 'Valencia',
    color: "#134F71",
    codes: '66'
  },
{
    name: 'Wedgewood',
    color: "#C2DEF4",
    codes: '26'
  },
{
    name: 'Damson',
    color: "#470F1C",
    codes: '17'
  }
  ]
}
