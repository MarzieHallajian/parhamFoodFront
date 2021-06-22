import { Component, OnInit } from '@angular/core';

import { HttpApiService } from '../services/http-api.service';
import { Order } from '../backend-models/order.model';
// import {}


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  data = [{ resturant: "akbarjoje", food: [" qorme sabzi "," qeyme "], price : 0},
          { resturant: "gogolpasta", food: [" pizza "], price : 0},
          { resturant: "marmarpizza", food: [" lazania ", " pasta "], price : 0},
          { resturant: "asqarkasif", food: [" havij polo ", " albalo polo "], price : 0}
          ];

  constructor(private httpApiService: HttpApiService) { }

  ngOnInit(): void {
    let id = document.cookie.split(":")[1];
    this.httpApiService.get_c(id)
            .subscribe(
              res => {
                console.log(res);
                this.httpApiService.get_orders_history_c(res.phonenum as string)
                  .subscribe(
                      res0 => {
                          let arr = res0 as Array<Order>;
                          console.log(res0);
                          this.data = [];
                          for (let i = 0;i<arr.length;i++){
                              let order_server = {
                                  resturant: arr[i].res_name as string,
                                  food : arr[i].list as Array<string>,
                                  price : Number(arr[i].total) as number, 
                              }   
                   
                              this.data.push(order_server);
                            }
                        },
                          error => {
                            // error on server
                              console.log(error);
                          }
                  );
                
                
                
              },
              error => {
                // error on server
                console.log(error);
              }
            );
    
  }

  

  food: any;
  

  checkC(){
    this.food = [];
    console.log("this workd");
    console.log(this.data.length);
   
  }


// export class Order {
//   total?: number;
//   list?: Array<String>;
//   cust_phone?: String;
//   res_name?: String;
//   user_accepted?: boolean;
//   manager_accepted?: boolean;
//   pre_delay?: Number;
//   sent_delay?: Number;
//   finished?: boolean;
// }
}