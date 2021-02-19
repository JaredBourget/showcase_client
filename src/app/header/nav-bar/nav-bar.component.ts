import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../../services/current.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  shoppingCart = faShoppingCart;

  cart: number = 0;

  user: any;

  constructor(
    public curr: CurrentService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.curr.getCurrentUser().subscribe((currUser) => {
      this.user = currUser;
      console.log(this.user)
    })
    this.userService.getUser(1).subscribe((res) => {
      console.log('user fetched from db', res)
    })
    this.curr.getCurrentCart().subscribe((currentCart) => {
      this.cart = currentCart.length;
    })
  }

}
