import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.USerSettings;
  }

  public USerSettings = {
    "OilYellowSet": false,
    "OilWhiteSet": false,
    "LightSet": false,
    Tanks:[
      {"id" : 1, "Burner" : true, "MixerSet" : false, "PaintSet" : 200, "OilSet" : 90},
      {"id" : 2, "Burner" : false, "MixerSet" : true,  "PaintSet" : 115, "OilSet" : 220},
      {"id" : 3, "Burner" : true, "MixerSet" : false, "PaintSet" : 135, "OilSet" : 100},
      {"id" : 4, "Burner" : false, "MixerSet" : true,  "PaintSet" : 200, "OilSet" : 120},
    ]
  }

}
