import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-states',
  templateUrl: 'states.html'
})
export class StatesPage {
  selectedItem: any;
  icons: string[];
  states: Array<{state: string, postal: string}>;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.states = [
      {'state': 'Alabama', 'postal': 'AL'},
      {'state': 'Alaska','postal': 'AK'},
      {'state': 'Arizona', 'postal': 'AZ'},
      {'state': 'Arkansas', 'postal': 'AR'},
      {'state': 'California', 'postal': 'CA'},
      {'state': 'Colorado', 'postal': 'CO'},
      {'state': 'Connecticut', 'postal': 'CT'},
      {'state': 'Delaware', 'postal': 'DE'},
      {'state': 'District of Columbia', 'postal': 'DC'},
      {'state': 'Florida', 'postal': 'FL'},
      {'state': 'Georgia',  'postal': 'GA'},
      {'state': 'Hawaii', 'postal': 'HI'},
      {'state': 'Idaho', 'postal': 'ID'},
      {'state': 'Illinois', 'postal': 'IL'},
      {'state': 'Indiana',  'postal': 'IN'},
      {'state': 'Iowa', 'postal': 'IA'},
      {'state': 'Kansas', 'postal': 'KS'},
      {'state': 'Kentucky', 'postal': 'KY'},
      {'state': 'Louisiana',  'postal': 'LA'},
      {'state': 'Maine',  'postal': 'ME'},
      {'state': 'Maryland', 'postal': 'MD'},
      {'state': 'Massachusetts', 'postal': 'MA'},
      {'state': 'Michigan', 'postal': 'MI'},
      {'state': 'Minnesota', 'postal': 'MN'},
      {'state': 'Mississippi', 'postal': 'MS'},
      {'state': 'Missouri', 'postal': 'MO'},
      {'state': 'Montana', 'postal': 'MT'},
      {'state': 'Nebraska', 'postal': 'NE'},
      {'state': 'Nevada', 'postal': 'NV'},
      {'state': 'New Hampshire', 'postal': 'NH'},
      {'state': 'New Jersey', 'postal': 'NJ'},
      {'state': 'New Mexico', 'postal': 'NM'},
      {'state': 'New York', 'postal': 'NY'},
      {'state': 'North Carolina', 'postal': 'NC'},
      {'state': 'North Dakota', 'postal': 'ND'},
      {'state': 'Ohio', 'postal': 'OH'},
      {'state': 'Oklahoma', 'postal': 'OK'},
      {'state': 'Oregon', 'postal': 'OR'},
      {'state': 'Pennsylvania', 'postal': 'PA'},
      {'state': 'Rhode Island', 'postal': 'RI'},
      {'state': 'South Carolina', 'postal': 'SC'},
      {'state': 'South Dakota', 'postal': 'SD'},
      {'state': 'Tennessee', 'postal': 'TN'},
      {'state': 'Texas', 'postal': 'TX'},
      {'state': 'Utah', 'postal': 'UT'},
      {'state': 'Vermont', 'postal': 'VT'},
      {'state': 'Virginia', 'postal': 'VA'},
      {'state': 'Washington', 'postal': 'WA'},
      {'state': 'West Virginia', 'postal': 'WV'},
      {'state': 'Wisconsin', 'postal': 'WI'},
      {'state': 'Wyoming', 'postal': 'WY'}
    ]

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(StatesPage, {
      item: item
    });
  }
}
