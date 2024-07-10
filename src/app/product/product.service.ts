import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
{}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // http: any;
  constructor(private http: HttpClient) { }

  getproducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }

  addEditProduct(postData: any, selectedPdt:any){
    if(!selectedPdt){
      return this.http.post(`http://localhost:3000/addproducts`, postData);
    }else{
      return this.http.put(`http://localhost:3000/productupdate/${selectedPdt.id}`, postData);
    }
 
  }

  deleteProduct(productId: number): Observable<any> 
  {
    return this.http.delete(`http://localhost:3000/productdelet/${productId}`);
  }
}
