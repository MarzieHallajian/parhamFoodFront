import { Component, OnInit } from '@angular/core';
// import {}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  // data : [{ name: "hi", number: [1, 2] }] | [name : "", number[]]];
  // data : "hello";
  constructor() { }

  ngOnInit(): void {

  }

  checkC(){
    console.log("this workd");
    // console.log(this.data[0].number[0]);
  }

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