import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {}
  
  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap((): boolean => this.loading = false)
    // )
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
  }

  title = 'angular app';
  loading = false
  products: IProduct[] = []
  term = ''

}
