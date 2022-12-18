import { Component, inject } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  private productsService = inject(ProductsService);
  products$ = this.productsService.products$;

  get skeleton() {
    const shared = { height: '1em', borderRadius: '2em' };
    return {
      items: Array(8),
      card: { height: '300px' },
      title: { ...shared, width: '70%' },
      price: { ...shared, width: '20%', marginLeft: '10%' },
      description: { ...shared, width: '85%', height: '.75em' },
      button: { ...shared, width: '30%', display: 'block' }
    };
  }
}
