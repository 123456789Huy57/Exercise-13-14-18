import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products:Product[] = [
    {id:1,name:"Coca",price:15},
    {id:2,name:"Pepsi",price:12},
    {id:3,name:"7up",price:10},
    {id:4,name:"Mirinda",price:8},
    {id:5,name:"Fanta",price:-5}
  ]
}
