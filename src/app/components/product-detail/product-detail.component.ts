import {Component, Input} from '@angular/core';
import {Product} from "../../models/product";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product$!:Product
  constructor(private service:ProductService,private route:ActivatedRoute)
  {

  }
  /*ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: any; }) => {
      this.index =Number(params['id']);
    });
    this.product$ = this.service.getProduct(this.index)
  }*/


  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getProduct(id)
      .subscribe(product => this.product$ = product);
  }

}
