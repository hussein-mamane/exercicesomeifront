import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {ProductCardComponent} from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products!:Product[]
  constructor(private service:ProductService) {
  }
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      {
        next: (data:Product[]) =>this.products=data ,
        error: (error:Error) => {
          console.error('Error fetching products:', error);
        },
        complete: () => {
          console.log('products loaded successfully');
        }
      }
    );
  }


}
