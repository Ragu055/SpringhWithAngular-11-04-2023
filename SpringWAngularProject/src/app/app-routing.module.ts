import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShopmallComponentComponent } from './create-shopmall-component/create-shopmall-component.component';
import { ShopMallListComponent } from './shop-mall-list/shop-mall-list.component';

const routes: Routes = [
  {path: 'shop',component:ShopMallListComponent},
  {path: 'add',component:CreateShopmallComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
