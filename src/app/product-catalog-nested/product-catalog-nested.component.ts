import { Component } from '@angular/core';

import { CatalogService } from '../catalog.service';



@Component({

  selector: 'app-product-catalog-nested',

  standalone: false,

  templateUrl: './product-catalog-nested.component.html',

  styleUrls: ['./product-catalog-nested.component.css'],

})

export class ProductCatalogNestedComponent {

  public categories: any;

  constructor(private catalogService: CatalogService) {

    this.categories = catalogService.getCategories();

  }

}


