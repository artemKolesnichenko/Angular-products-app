import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  })

  get title(): FormControl {
    return this.form.controls.title as FormControl
  }

  constructor(
    private productService: ProductService,
    private modalService: ModalService
    ) { }

  ngOnInit(): void {
  }


  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate:3.9,
        count: 1
      }
    }).subscribe(() => {
        this.modalService.close()
    })
  }

}
