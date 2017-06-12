import { Component, Input } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SecuritySearchService } from '../services/security-search.service'
import { Security } from '../model/security';

@Component({
  selector: 'br-security-finder',
  templateUrl: './templates/security-finder.component.html',
  styleUrls: ['./styles/security-finder.component.css']
})
export class SecurityFinderComponent {
  securities: Observable<Security[]>;
  private searchTerms = new Subject<string>();

  constructor(private securitySearchService: SecuritySearchService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.securities = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.securitySearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Security[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log('error');
        return Observable.of<Security[]>([]);
      });
  }

  gotoDetail(security: Security): void {

  }
}
