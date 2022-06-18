import { Component, OnInit } from '@angular/core';
import { AppComponent} from "../app.component";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  isDark = AppComponent
  constructor() { }

  ngOnInit(): void {
  }

  darkMode(event: any){
    if(event.target.checked){
      localStorage.setItem('color-theme','dark');
      // @ts-ignore
      document.getElementById('mode').classList.add('dark')
    }
    else{
      localStorage.setItem('color-theme','light');
      // @ts-ignore
      document.getElementById('mode').classList.remove('dark')
    }
  }
}
