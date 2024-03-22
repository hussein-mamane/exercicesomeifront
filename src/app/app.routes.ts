import { Routes } from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

export const routes: Routes = [

  /*{
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },*/
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'list/:id',
    component:ProductDetailComponent,
    pathMatch:'full'
  },
];
