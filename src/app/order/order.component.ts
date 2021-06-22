import { Component, OnInit } from '@angular/core';
// import { defaultCipherList } from 'constants';
import { HttpApiService } from '../services/http-api.service';
import { Food } from '../backend-models/food.model';
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
  
  constructor(private httpApiService: HttpApiService) { }
  
  resetAll(){
    this.resturantBool = false;
    this.foodBool = false;
    this.areaBool = false;
    this.isData = false;
    
  }
  ngOnInit(): void {
     this.httpApiService.get_foods_c()
            .subscribe(
              res => {
                let arr = res as Array<Food>;
                
                this.posts = [];
                for (let i = 0;i<arr.length;i++){
                    let food_server = {
                      resturant: arr[i].res_name as string,
                      food : arr[i].name as string,
                      time : arr[i].pre_delay?.toString() as string, 
                      price : arr[i].price?.toString() as string, 
                      number : 0,
                    }
                    this.posts.push(food_server);
                }
                console.log(this.posts);
                this.isData = true;
                //console.log(res);
              },
              error => {
                // error on server
                console.log(error);
              }
            );
            console.log(this.posts);
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
      this.httpApiService.search_by_section_c(Number(this.searchValue))
            .subscribe(
              res => {
                let arr = res as Array<Food>;
                
                this.posts = [];
                for (let i = 0;i<arr.length;i++){
                    let food_server = {
                      resturant: arr[i].res_name as string,
                      food : arr[i].name as string,
                      time : arr[i].pre_delay?.toString() as string, 
                      price : arr[i].price?.toString() as string, 
                      number : 0,
                    }
                    this.posts.push(food_server);
                }
                console.log(this.posts);
                this.isData = true;
                //console.log(res);
              },
              error => {
                // error on server
                console.log(error);
              }
            );
            console.log(this.posts);

      //az searchValue baraye search estefade mishe
      //should get data from backend and keep it in posts!!!
    }else if(this.foodBool == true){
      this.httpApiService.search_by_food_c(this.searchValue)
            .subscribe(
              res => {
                let arr = res as Array<Food>;
                
                this.posts = [];
                for (let i = 0;i<arr.length;i++){
                    let food_server = {
                      resturant: arr[i].res_name as string,
                      food : arr[i].name as string,
                      time : arr[i].pre_delay?.toString() as string, 
                      price : arr[i].price?.toString() as string, 
                      number : 0,
                    }
                    this.posts.push(food_server);
                }
                console.log(this.posts);
                this.isData = true;
                //console.log(res);
              },
              error => {
                // error on server
                console.log(error);
              }
            );
            console.log(this.posts);
    }else if(this.resturantBool == true){
      this.httpApiService.search_by_res_c(this.searchValue)
            .subscribe(
              res => {
                let arr = res as Array<Food>;
                
                this.posts = [];
                for (let i = 0;i<arr.length;i++){
                    let food_server = {
                      resturant: arr[i].res_name as string,
                      food : arr[i].name as string,
                      time : arr[i].pre_delay?.toString() as string, 
                      price : arr[i].price?.toString() as string, 
                      number : 0,
                    }
                    this.posts.push(food_server);
                }
                console.log(this.posts);
                this.isData = true;
                //console.log(res);
              },
              error => {
                // error on server
                console.log(error);
              }
            );
            console.log(this.posts);
      // this.posts = [{resturant: "akbarJoje", food : "joje", time : "30", price : "20000", number : 0}];
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
