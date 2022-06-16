import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.UserSettings;
  }

  public UserSettings = {
    "OilYellowSet": false,
    "OilWhiteSet": true,
    "LightSet": false,
    Tanks:[
      {"id" : 1, "BurnerSet" : true, "MixerSet" : false, "PaintSet" : 200, "OilSet" : 100},
      {"id" : 2, "BurnerSet" : false, "MixerSet" : true,  "PaintSet" : 115, "OilSet" : 220},
      {"id" : 3, "BurnerSet" : true, "MixerSet" : false, "PaintSet" : 135, "OilSet" : 100},
      {"id" : 4, "BurnerSet" : false, "MixerSet" : true,  "PaintSet" : 200, "OilSet" : 120},
    ]
  }

}
