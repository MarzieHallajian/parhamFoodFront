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
  isSearch = false;
  isData = false;
  doneBuy = false;
  allowBuy = false;
  searchValue = "";
  posts = [{resturant: "", food : "", time : "", price : "", number : 0}];
  
  constructor() { }
  
  resetAll(){
    this.resturantBool = false;
    this.foodBool = false;
    this.areaBool = false;
    this.isData = false;
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
    this.isSearch = true;
    this.allowBuy = false;
    this.doneBuy = false;
    this.posts = [];  
    
    if(this.areaBool == true){

      //az searchValue baraye search estefade mishe
      //should get data from backend and keep it in posts!!!
    }else if(this.foodBool == true){

    }else if(this.resturantBool == true){
      
      this.posts = [{resturant: "akbarJoje", food : "joje", time : "30", price : "20000", number : 0}];
    }else{
          //do nothing!!!!
    }
    // this.getPosts
    console.log(this.posts.length);
    if(this.posts.length > 0){
      this.isData = true;
    }
    
  }
  addToBasket(){
    this.doneBuy = true;
    this.resetAll();
    for (let index = 0; index < this.posts.length; index++) {
      console.log("hi");
      if(this.posts[index].number > 0){
        this.allowBuy = true;
        console.log(this.posts[index].number);
          // bfrst bara backend az in index estefade she upadate basket
      }
      
    }
    this.isSearch = false;
  }


}
