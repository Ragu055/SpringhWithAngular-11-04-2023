import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShopMallService } from '../shop-mall.service';
import { ShopMall } from './shopmall';

@Component({
  selector: 'app-shop-mall-list',
  templateUrl: './shop-mall-list.component.html',
  styleUrls: ['./shop-mall-list.component.css']
})
export class ShopMallListComponent implements OnInit {
  shopMall!:Observable<ShopMall[]>;
  constructor(private shopmallService:ShopMallService,private router:Router){}
  ngOnInit(): void {
      this.reloadData();
  }
  reloadData(){
    this.shopMall=this.shopmallService.getName();
  }

}
