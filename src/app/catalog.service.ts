import { Injectable } from '@angular/core';

const IMG = {
  coca: 'https://www.alfatah.pk/cdn/shop/files/NewProject-2023-07-19T104104.689_1024x1024.png?v=1689745272',
  pepsi: 'https://tse4.mm.bing.net/th/id/OIP.az73uQjCNOksdzG1vVLdSwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  sting: 'https://tse2.mm.bing.net/th/id/OIP.4mGTt8qRQ-ISq0mznEaOtwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  heineken: 'https://tse4.mm.bing.net/th/id/OIP.-cXC0BAnBYSUYUZBYGJa6QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  bia333: 'https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8935012413338.jpg.webp',
  saigon: 'https://www.wsb-sabeco.com.vn/wp-content/uploads/2024/12/Bia-Sai-Gon-Special.png',
};

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: IMG.coca },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: IMG.pepsi },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: IMG.sting },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heleiken', Price: 500, Image: IMG.heineken },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: IMG.bia333 },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: IMG.saigon },
      ],
    },
  ];

  constructor() {}
  getCategories() {
    return this.datas;
  }
}
