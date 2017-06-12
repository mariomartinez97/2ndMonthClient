import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from "rxjs/Observable";

declare var Auth0Lock: any;

@Injectable()
export class AuthService implements OnInit {
  lock: any;

  constructor(private http: Http) { }

  ngOnInit(): void {
    console.log('PS INITIALIZED');
    this.lock = new Auth0Lock('d3a_Rw2yO4Trh_jCCCP7wFaNywSS7MhF', 'rodrigocso.auth0.com');
    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          throw new Error(error);
        }
        localStorage.setItem('token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });
  }

  public login(): void {
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
      // We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      //console.log("LOGGED IN");
      // We also get the user's JWT
      localStorage.setItem('token', id_token);

      window.location.reload();
      this.authenticated();
    });
  }

  public authenticated(): boolean {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    //return tokenNotExpired('id_token');
    return tokenNotExpired("token");
  }

  public logout(): void {
    // To log out, we just need to remove
    // the user's profile and token
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
  }

}
