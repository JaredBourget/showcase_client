import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(
      private http: HttpClient
    ) { }
    
    getLogin() {
      const headers = {
        'content-type': 'appication/json',
        'authorization': 'Bearer API2_ACCESS_TOKEN',
        'cache-control': 'no-cache'
      };

      return this.http.get('https://dev-w1e49nqe.us.auth0.com/api/v2/clients/1UyLDlxOWxgXc9HFd9SeF4wxcIPKWNKs', { headers })
    }

    getUser() {
        return this.http.get('http://localhost:4000/api/v1/home');
    }

}


// var axios = require("axios").default;

// var options = {
//   method: 'PATCH',
//   url: 'https://dev-w1e49nqe.us.auth0.com/api/v2/clients/1UyLDlxOWxgXc9HFd9SeF4wxcIPKWNKs',
//   headers: {
//     'content-type': 'application/json',
//     authorization: 'Bearer API2_ACCESS_TOKEN',
//     'cache-control': 'no-cache'
//   },
//   data: {initiate_login_uri: '<login_url>'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });