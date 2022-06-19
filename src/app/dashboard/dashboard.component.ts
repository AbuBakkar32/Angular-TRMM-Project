import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  StatusReport: any;

  constructor() {
  }

  ngOnInit(): void {
    this.StatusReport = this.Data;
  }

  public Data = {
    "TempAlarm": false,
    "LevelAlarm": false,
    "OilYellow": false,
    "OilWhite": false,
    "LightS": false,
    "DieselAlarm": false,
    "FuelLevel": 100,
    "LeftTemp": 200,
    "RightTemp": 250,
    Tanks: [
      {"id": 1, "Burner": true, "Mixer": false, "Alarm": true, "PaintTemp": 150, "OilTemp": 90},
      {"id": 2, "Burner": false, "Mixer": true, "Alarm": false, "PaintTemp": 87, "OilTemp": 36},
      {"id": 3, "Burner": true, "Mixer": true, "Alarm": true, "PaintTemp": 54, "OilTemp": 80},
      {"id": 4, "Burner": false, "Mixer": false, "Alarm": false, "PaintTemp": 77, "OilTemp": 63},
    ]
  }
}
