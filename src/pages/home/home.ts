import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  state: string;
  showSeasonalIcon: boolean;
  showRealtimeIcon: boolean;

  constructor(public navCtrl: NavController) {
    this.state = 'Iowa';
    this.showRealtimeIcon = true;
    this.showSeasonalIcon = true;
  }

}
