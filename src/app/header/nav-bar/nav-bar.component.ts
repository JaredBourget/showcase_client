import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../../services/current.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  shoppingCart = faShoppingCart;

  cart: number = 0;

  user: any

  constructor(
    public curr: CurrentService
  ) { }

  ngOnInit(): void {
    this.curr.getCurrentUser().subscribe((currUser) => {
      this.user = currUser;
      console.log(this.user)
    })
    this.curr.getCurrentCart().subscribe((currentCart) => {
      this.cart = currentCart.length;
    })
  }

}
