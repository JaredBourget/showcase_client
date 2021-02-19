import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(
      private http: HttpClient
    ) { }

    getUser(id: number) {
        return this.http.get(`http://localhost:4000/api/v1/user/${id}`);
    }
  }