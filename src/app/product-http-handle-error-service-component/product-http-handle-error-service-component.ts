import { Component, signal } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  styleUrl: './product-http-handle-error-service-component.css',
  templateUrl: './product-http-handle-error-service-component.html',
})
export class ProductHttpHandleErrorServiceComponent {
  products = signal<Product[]>([]);
  errMessage = signal('');

  constructor(private readonly service: ProductHttpHandleErrorService) {}

  ngOnInit(): void {
    this.service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (error: Error) => {
        this.errMessage.set(error.message);
      },
    });
  }
}
