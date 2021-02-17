import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../../services/current.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  testProducts = [
    {id: 1, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 5599, name: 'Pivot Switchblade 29 Race XT Mountain Bike'},
    {id: 2, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WV8/CRI.jpg', price: 5199, name: 'Pivot Trail 429 Carbon 29 Race XT Mountain Bike'},
    {id: 3, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 6999, name: 'Pivot Switchblade 29 Race XT Mountain Bike'},
    {id: 4, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 5999, name: 'Pivot Switchblade 29 Race XT Mountain Bike'}
  ];

  constructor(
    public curr: CurrentService
  ) { }

  ngOnInit(): void {
  }

  addToCart(itemIndex: number) {
    console.log(itemIndex)
    this.curr.setCurrentCart([this.testProducts[itemIndex]])
    this.curr.getCurrentCart().subscribe(res => console.log(res))
  }
}
