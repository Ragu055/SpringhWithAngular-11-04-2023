import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShopMallService {
  private baseUrl="http://localhost:8080/shopMall/addUser"
   
  constructor(private http:HttpClient) { }
     getName():Observable<any>{
      return this.http.get(`${this.baseUrl}`);
     }
}
