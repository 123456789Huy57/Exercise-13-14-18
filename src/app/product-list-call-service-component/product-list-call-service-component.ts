import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  min_price:number = 0;
  max_price:number = 100;
  products:Product[] = []
  constructor(private ps:ProductService) {
    //this.products = this.ps.getProductList();
  }
  ngOnInit():void
  {
    this.products = this.ps.getProductList();
  }
  callFilterProductListByPrice()
  {
    this.products = this.ps.filterProductListByPrice(this.min_price, this.max_price);
  }

}
