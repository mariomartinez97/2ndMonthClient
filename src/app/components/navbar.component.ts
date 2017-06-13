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
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log("Auth profile: ", this.profile);
  }
  login() {
    this.auth.login();
    this.loginCheck();
  }
  logout() {
    this.auth.logout();
  }
  loginCheck() : number
    {
      if(this.profile != null)
      {
        return  1;
      }
      else
      {
        return 0;
      }
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
