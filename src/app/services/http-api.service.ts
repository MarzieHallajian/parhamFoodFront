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

  // Get Customer
  get_c(id: string): Observable<Customer> {
    let data = { "id" : id }
    return this.http.post(`${baseurl}/customers/profile`,data)
  }

  // Login Customer
  login_c(data: any): Observable<Customer> {
    return this.http.post(`${baseurl}/customers/login`,data);
  }

  // Register Customer
  register_c(data: any): Observable<Customer> {
    return this.http.post(`${baseurl}/customers/register`,data);
  }

  // Update Customer
  update_c(data: any): Observable<Customer> {
    return this.http.post(`${baseurl}/customers/update`,data);
  }

  // Get Manager
  get_m(id: string): Observable<Customer> {
    let data = { "id" : id }
    return this.http.post(`${baseurl}/managers/profile`,data)
  }

  // Login Manager
  login_m(data: any): Observable<Manager> {
    return this.http.post(`${baseurl}/managers/login`,data);
  }

  // Register Manager
  register_m(data: any): Observable<Manager> {
    return this.http.post(`${baseurl}/managers/register`,data);
  }

  // Update Manager
  update_m(data: any): Observable<Manager> {
    return this.http.post(`${baseurl}/managers/update`,data);
  }

  // Get Foods For Manager
  get_foods_m(res_name: string): any {
    return this.http.get(`${baseurl}/managers/food/${res_name}`)
  }

  // Add Food By Manager
  add_food_m(data: any): Observable<Food> {
    return this.http.post(`${baseurl}/managers/add/food`,data);
  }

  // Delete Food By Manager
  delete_food_m(data: any): any{
    return this.http.delete(`${baseurl}/managers/delete/food`,data);
  }

  // Update Food By Manager
  update_food_m(data: any): Observable<Food> {
    return this.http.post(`${baseurl}/managers/update/food`,data);
  }

  // Accept Order By Manager
  accept_order_m(data: any): Observable<Order>{
    return this.http.post(`${baseurl}/managers/accept/order`,data);
  }

  // Get Restaturant Orders For Manager
  get_orders_m(res_name: String){
    return this.http.get(`${baseurl}/managers/orders/${res_name}`)
  }

  // Get Restaturant Comments For Manager
  get_comments_m(res_name: String) {
    return this.http.get(`${baseurl}/managers/comments/${res_name}`);
  }

  // Reply To Comment For Manager
  reply_comment_m(data: any): Observable<Comment> {
    return this.http.post(`${baseurl}/managers/reply`,data);
  }

  // Get Foods For Customer
  get_foods_c(){
    return this.http.get(`${baseurl}/customers/food`);
  }

  // Create Comment Customer
  add_comment_c(data: any): Observable<Comment>{
    return this.http.post(`${baseurl}/customers/comment`,data);
  }

  // Search By Section Customer
  search_by_section_c(section: Number){
    return this.http.get(`${baseurl}/customers/search/section/${section}`);
  }

  // Search By Food Customer
  search_by_food_c(food: String){
    return this.http.get(`${baseurl}/customers/search/food/${food}`);
  }

  // Search By Restaturant Customer
  search_by_res_c(res_name: String){
    return this.http.get(`${baseurl}/customers/search/restaurant/${res_name}`);
  }

  // Add To Old Order Or Create A New Order By Customer
  add_create_order_c(food_name: String,cust_phone: String,res_name: String): Observable<Order>{
    return this.http.get(`${baseurl}/customers/add/order/food/${food_name}/${cust_phone}/${res_name}`);
  }

  // Update Order By Customer
  update_order_c(data: any): Observable<Order>{
    return this.http.put(`${baseurl}/customers/update/order`,data)
  }

  // Delete Order By Customer
  delete_order_c(data: any): any {
    return this.http.post(`${baseurl}/customers/delete/order`,data)
  }

  // Orders History By Customer
  get_orders_history_c(cust_phone: string): any{
    return this.http.get(`${baseurl}/customers/history/${cust_phone}`);
  }

  // Finalize Order By Customer
  finalize_order_c(data: any): Observable<Order>{
    return this.http.post(`${baseurl}/customers/orders/final`,data);
  }

  // Reordering By Customer
  reorder_c(data: any): Observable<Order>{
    return this.http.post(`${baseurl}/customers/order/reorder`,data);
  }

  // Order Delivered By Customer
  delivered_c(data: any): Observable<Order>{
    return this.http.post(`${baseurl}/customers/order/finish`,data);
  }
}
