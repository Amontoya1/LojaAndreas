
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }


  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }
  createProduct():void {
    this.ProductService.create(this.product).subscribe(() => {
    this.ProductService.showMessage('Operação executada com sucesso')
    this.router.navigate(['/product'])
    })

  }
  cancelar():void {
    this.router.navigate(['/product'])
  }
}


