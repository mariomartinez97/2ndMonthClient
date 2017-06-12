import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Security } from '../model/security';

@Injectable()
export class SecuritySearchService {
  private securitiesUrl = 'http://localhost:8080/securities';

  constructor(private http: Http) { }

  search(term: string): Observable<Security[]> {
    return this.http
      .get(`http://localhost:8080/securities/?q=${term}`)
      .map(response => response.json() as Security[]);
  }
}
