import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { Home } from './home/home';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { Homework } from './homework/homework';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListAdvancedComponent } from './product-list-advanced-component/product-list-advanced-component';
import { ProductListSearchComponent } from './product-list-search-component/product-list-search-component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ProductCatalogNestedComponent } from './product-catalog-nested/product-catalog-nested.component';
import { GroupCustomersHttpComponent } from './group-customers-http/group-customers-http.component';

const routes: Routes = [
  {
    path: '',
    component: Homework,
    children: [
      { path: '', pathMatch: 'full', component: Home },
      { path: 'binding-property', component: BindingPropertyComponent },
      { path: 'binding-class', component: BindingClassComponent },
      { path: 'binding-style', component: BindingStyleComponent },
      { path: 'binding-event', component: BindingEventComponent },
      { path: 'binding-two-way', component: BindingTwoWayComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-dropdown-list', component: ProductDropdownListComponent },
      { path: 'product-list-call-service', component: ProductListCallServiceComponent },
      { path: 'product-list-call-http-service', component: ProductListCallHttpServiceComponent },
      { path: 'product-http-handle-error-service', component: ProductHttpHandleErrorServiceComponent },
      { path: 'products', component: ProductListAdvancedComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      {path: "searchproduct", component: ProductListSearchComponent},
      { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
      {
        path: 'service-product-image-event/:id',
        component: ServiceProductImageEventDetailComponent,
      },
      { path: 'product-catalog-nested', component: ProductCatalogNestedComponent },
      { path: 'group-customers-http', component: GroupCustomersHttpComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
