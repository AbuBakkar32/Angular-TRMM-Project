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
      {"id": 1, "Burner": true, "Mixer": false, "Alarm": true, "PaintTemp": 80, "OilTemp": 99},
      {"id": 2, "Burner": false, "Mixer": true, "Alarm": false, "PaintTemp": 50, "OilTemp": 35},
      {"id": 3, "Burner": true, "Mixer": true, "Alarm": true, "PaintTemp": 65, "OilTemp": 75},
      {"id": 4, "Burner": false, "Mixer": false, "Alarm": false, "PaintTemp": 90, "OilTemp": 60},
    ]
  }

}
