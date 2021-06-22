import { Component, OnInit } from '@angular/core';

import { HttpApiService } from '../services/http-api.service';

// import {}


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  constructor(private httpApiService: HttpApiService) { }

  ngOnInit(): void {
    

  data = [{ resturant: "akbarjoje", food: [" qorme sabzi "," qeyme "], price : 0},
          { resturant: "gogolpasta", food: [" pizza "], price : 0},
          { resturant: "marmarpizza", food: [" lazania ", " pasta "], price : 0},
          { resturant: "asqarkasif", food: [" havij polo ", " albalo polo "], price : 0}
          ];

  food: any;
  
  constructor() { }

  ngOnInit(): void {
      

  }

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