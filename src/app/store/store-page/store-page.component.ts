import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../../services/current.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  products: any[] = []; 

  constructor(
    public curr: CurrentService,
    public prodService: ProductService
  ) { }

  ngOnInit() {
    this.prodService.getAllProducts().subscribe((prods: any[] = []) => {
      console.log(prods)
      this.products = prods;
    })
  }

  addToCart(itemIndex: number) {
    this.curr.setCurrentCart([this.products[itemIndex]])
    this.curr.getCurrentCart().subscribe(res => console.log(res))
  }
}
