import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  

  loginOrNot = false;
  loginCheck(){
    if(document.cookie.split(":")[1] == undefined){
      this.loginOrNot = false
    }else{
      this.loginOrNot = true;
    }
  }
}
