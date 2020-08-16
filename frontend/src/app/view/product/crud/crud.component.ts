
import { HeaderService } from './../../../componets/header.services';
import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
  headerService.headerData = {
  title: 'Cadastro de Produtos',
  icon: 'storefront',
  routeUrl: '/product/create'
}
}

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
   this.router.navigate(['/product/create'])
  }

}
