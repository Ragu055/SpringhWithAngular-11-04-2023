import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShopMallListComponent } from './shop-mall-list/shop-mall-list.component';
import { ShopMall } from './shop-mall-list/shopmall';
import { HttpClientModule } from '@angular/common/http';
import { CreateShopmallComponentComponent } from './create-shopmall-component/create-shopmall-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopMallListComponent,
    CreateShopmallComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
