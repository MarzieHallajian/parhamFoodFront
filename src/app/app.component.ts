import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  isLogin = true;
  title = 'my-app';
  // id = document.cookie.split
  logINN (){
    this.isLogin = false;
    console.log(this.isLogin);
  }
  
}
