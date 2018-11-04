import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaterWatchService } from '../../providers/water-watch/water-watch.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  state: string;
  showSeasonalIcon: boolean;
  showRealtimeIcon: boolean;

  public data: any[];

  constructor(
    public navCtrl: NavController,
    private waterWatchService: WaterWatchService
  ) {
    this.state = 'Iowa';
    this.showRealtimeIcon = true;
    this.showSeasonalIcon = true;
  }

  ngOnInit() {
    this.waterWatchService
      .getData()
      .subscribe((waterdata: any[]) => this.data = waterdata,
      error => () => {
        console.log('water watch service - error');
      }, () => {
        console.log('water watch service - success');
        console.log(this.data);
      }
    );
  }

}
