import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(
      private http: HttpClient
    ) { }

    getUser() {
        return this.http.get('http://localhost:4000/api/v1/home');
    }

}
