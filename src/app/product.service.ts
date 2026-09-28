import { Injectable } from '@angular/core';



const IMG = {

  coca: 'https://www.alfatah.pk/cdn/shop/files/NewProject-2023-07-19T104104.689_1024x1024.png?v=1689745272',

  pepsi: 'https://tse4.mm.bing.net/th/id/OIP.az73uQjCNOksdzG1vVLdSwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',

  sting: 'https://tse2.mm.bing.net/th/id/OIP.4mGTt8qRQ-ISq0mznEaOtwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',

  beer: 'https://tse4.mm.bing.net/th/id/OIP.-cXC0BAnBYSUYUZBYGJa6QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',

};



@Injectable({

  providedIn: 'root',

})

export class ProductService {

  productsImage = [

    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: IMG.coca },

    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: IMG.pepsi },

    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: IMG.sting },

  ];

  constructor() {}

  getProductsWithImages() {

    return this.productsImage;

  }

  getProductDetail(id: any) {

    return this.productsImage.find((x) => x.ProductId == id);

  }

}


