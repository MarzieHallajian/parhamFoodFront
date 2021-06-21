import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../backend-models/comment.model';
import { Customer } from '../backend-models/customer.model';
import { Food } from '../backend-models/food.model';
import { Manager } from '../backend-models/manager.model';
import { Order } from '../backend-models/order.model';

const baseurl = 'http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }

  // Login Customer and return id
  login_c(data: any): Observable<Customer> {
    return this.http.post(`${baseurl}/customers/login`,data);
  }

  // Get profile of manager
  get_manager_profile(id: any): Observable<Manager> {
    let data = {
      "id": id
    }
    return this.http.post(`${baseurl}/managers/profile`,data);
  }

}
