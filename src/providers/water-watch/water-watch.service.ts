import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WaterWatchService {

  // const PARAM_NIRATE = 00630;
  // const PARAM_TEMP = 00010;

  constructor(public http: HttpClient) {
    console.log('Hello WaterWatchServiceProvider Provider');
  }

  getData(): Observable<any> {
    // "http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=ia&parameterCd=00060"

    let state = 'ia';
    let parameter = '00060';

    // https://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=ia&parameterCd=00630&siteStatus=all
    const _prefix = 'https://waterservices.usgs.gov/nwis/iv/?format=json'
    const _state = 'stateCd=' + state;
    const _parameter = 'parameterCd=' + parameter;

    let url = _prefix +
      '&' + _state +
      '&' + _parameter;

      console.log(url);
    // return this.http.get(url);
  
    return this.http.get('http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=ia&parameterCd=00060');
  }

}
