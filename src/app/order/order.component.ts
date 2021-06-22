import { Component, OnInit } from '@angular/core';
// import { defaultCipherList } from 'constants';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  resturantBool = false;
  foodBool = false;
  areaBool = false;
  searchValue = "";
  constructor() { }
  
  resetAll(){
    this.resturantBool = false;
    this.foodBool = false;
    this.areaBool = false;
  }
  ngOnInit(): void {

  }
  
  onResturant(){
    this.resetAll();
    this.resturantBool = true;
  }
  onFood(){
    this.resetAll();
    this.foodBool = true;
  }
  onArea(){
    this.resetAll();
    this.areaBool = true;
  }
  onSearch(){
    if(this.areaBool == true){

    }else if(this.foodBool == true){

    }else if(this.resturantBool == true){
      
    }else{
          //do nothing!!!!
    }
  }

}
