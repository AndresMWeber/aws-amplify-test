import { Component, EventEmitter, Output } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aws-amplify-app';
  signedIn: boolean;
  user: any;
  greeting: string;
  mobileQuery: MediaQueryList;
  nav = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'My Account (Part 2)',
      path: '/auth'
    }
  ];
  @Output() toggleSideNav = new EventEmitter();

  constructor(public amplifyService: AmplifyService) {
    amplifyService
      .auth()
      .currentAuthenticatedUser()
      .then(console.log)
      .catch(console.log);

    this.amplifyService.authStateChange$.subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
      } else {
        this.user = authState.user;
        this.greeting = `Hello are you: ${this.user.username}?`;
      }
    });
  }

  toggleMobileNav(nav: MatSidenav) {
    if (false) {
      nav.toggle();
    }
  }
}
