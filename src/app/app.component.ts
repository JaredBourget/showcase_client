import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CurrentService } from './services/current.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(
    public auth: AuthService,
    public curr: CurrentService
  ) {
    this.auth.user$.subscribe((user) => {
      user ? this.curr.setCurrentUser(user) : this.auth.loginWithRedirect();
    })
  }
}