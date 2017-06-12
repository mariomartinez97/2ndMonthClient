import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'br-caralho',
  templateUrl: './templates/navbar.component.html',
  styleUrls: ['./styles/navbar.component.css']
})
export class NavbarComponent {

  profile: any = null;

  constructor(private auth: AuthService) {
    console.log('caralho');
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }

}
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'br-caralho',
//   templateUrl: './templates/navbar.component.html',
//   styleUrls: ['./styles/navbar.component.css']
// })
// export class NavbarComponent {
//
// }
