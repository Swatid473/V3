import { Component } from '@angular/core';
import {Router,Event,NavigationStart,NavigationEnd} from '@angular/router';
import { RouterEvent } from '@angular/router/src/events';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(route:Router)
  {
route.events.subscribe((revent:RouterEvent)=>{
  this.check(revent);
});
  }
  title = 'CustomerApplication';
  loading:boolean=false;

  check(r:Event):void
  {
if(r instanceof NavigationStart)
this.loading=true;
else
this.loading=false;
  }
}
