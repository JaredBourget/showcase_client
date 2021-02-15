import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  testProducts = [
    {id: 1, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 5599, name: 'Pivot Switchblade 29 Race XT Mountain Bike'},
    {id: 2, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 4599, name: 'Pivot Switchblade 29 Race XT Mountain Bike'},
    {id: 3, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 6999, name: 'Pivot Switchblade 29 Race XT Mountain Bike'},
    {id: 4, imageURL: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 5999, name: 'Pivot Switchblade 29 Race XT Mountain Bike'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
