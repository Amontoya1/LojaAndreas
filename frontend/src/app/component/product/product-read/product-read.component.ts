import { ProductService } from './../../../components/product/create/product.service';
import { Product } from './../../../components/product/create/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products:Product[]
  displayedColumns: string[] = ['id', 'name', 'price', 'action']


  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
this.ProductService.read().subscribe(products => {
  this.products = products
  console.log(products)
})
  }

}
