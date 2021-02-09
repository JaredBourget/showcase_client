import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(
    public loginService: LoginService
  ) {
    this.loginService.getUser().subscribe(res => {
      console.log(res)
    })
   }
}
