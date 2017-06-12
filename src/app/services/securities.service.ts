// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
//
// import { Observable } from 'rxjs/Observable';
//
// import 'rxjs/add/operator/toPromise';
// //import 'rxjs/add/operator/map';
//
// import { Security } from '../model/security';
//
// @Injectable()
// export class SecuritiesService {
//   private securitiesUrl = 'http://localhost:8080/securities';
//
//   constructor(private http: Http) { }
//
//   getSecurities(): Promise<Security[]> {
//     return this.http.get(this.securitiesUrl)
//       .toPromise()
//       .then(response => response.json() as Security[])
//       .catch(this.handleError);
//   }
//
//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error);
//     return Promise.reject(error.message || error);
//   }
//
// }
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';

import { Security } from '../model/security';

@Injectable()
export class SecuritiesService{
  private securitiesUrl = 'http://localhost:8080/securities';
  constructor(private http: Http){}

  getSecurities(){
    return this.http.get('http://localhost:8080/securities')
    .map(res =>res.json());
  }

}
