import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';
@Injectable({
    providedIn: 'root'
})

export class ProductService {
    products:Product[] = [
          {id:1,name:"Coca",price:15, image_link:"https://as2.ftcdn.net/v2/jpg/04/84/03/73/1000_F_484037324_UfkErDld3FHHJ1tzysL0cEAg6wkBp6ku.jpg"},
          {id:2,name:"Pepsi",price:12, image_link:"https://tse4.mm.bing.net/th/id/OIP.M8FQ9_ymytj49COdc3j9UAHaKR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
          {id:3,name:"7up",price:10, image_link:"https://tse4.mm.bing.net/th/id/OIP.bjobQ2GI_DCVuV7Mry-K8gHaIB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
          {id:4,name:"Mirinda",price:8, image_link:"https://images.pexels.com/photos/11659577/pexels-photo-11659577.jpeg?cs=srgb&dl=pexels-vladimir-11659577.jpg&fm=jpg"},
          {id:5,name:"Fanta",price:-5, image_link:"https://tse2.mm.bing.net/th/id/OIP.NoJ8KvAqusUi0aNaC6ORZQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"}
        ]
    constructor() { }
    getProductList()
    {
        return this.products
    }
    filterProductListByPrice(min_price:number, max_price:number)
    {
        return this.products.filter(p=>p.price>=min_price && p.price<=max_price)
    }
}