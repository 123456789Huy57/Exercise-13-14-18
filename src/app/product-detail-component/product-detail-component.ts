import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../classes/IProduct';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';
import { extractIdFromSlug, getIdentityType } from '../classes/SlugHelper';
@Component({
  selector: 'app-product-detail-component',
  standalone: false,
  styleUrl: './product-detail-component.css',
  templateUrl: './product-detail-component.html',
})
export class ProductDetailComponent {
  product = signal<Product | null>(null);
  errMessage = signal('');
  public checkIdentityType=getIdentityType;
  public getIdFromSlug=extractIdFromSlug;

  constructor(
    private _service: ProductHttpHandleErrorService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      const idParam = param.get('id');

      if (idParam != null) {
        const id = parseInt(idParam);

        this._service.getProductList().subscribe({
          next: (data) => {
            this.product.set(
              data.find((p) => p.id === id) ?? null
            );
          },

          error: (err) => {
            this.errMessage.set(err);
          }
        });
      }
    });
  }

  goBack() {
    this.router.navigate(["products"]);
  }
}
