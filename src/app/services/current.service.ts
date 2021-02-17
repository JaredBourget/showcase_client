import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  private _user = new BehaviorSubject({});

  private _cart = new BehaviorSubject([]);

  readonly user$ = this._user.asObservable();
  
  readonly cart$ = this._cart.asObservable();

  constructor() { }

  getCurrentUser(): Observable<any>{
    return this._user.asObservable();
  }

  setCurrentUser(user: any): void {
    this._user.next(user)
  }

  getCurrentCart(): Observable<any>{
    return this._cart.asObservable();
  }

  setCurrentCart(cart: any): void {
    this._cart.next(cart)
  }
}
