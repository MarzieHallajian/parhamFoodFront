import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = "";
  area = "";
  address = "";
  phoneNumber = "";
  passWord = "";


  constructor(private httpApiService: HttpApiService
    ) { }

  ngOnInit(): void { //fk knm inja byd ettelate qablisho bgirim
    console.log("profile init")
    let id = document.cookie.split(":")[1];
    console.log(id)
    this.httpApiService.get_c(id)
            .subscribe(
              res => {
                // successful login
                if (res.name != undefined)
                  this.name = res.name;
                if (res.section != undefined)
                  this.area = res.section;
                if (res.address != undefined)
                  this.address = res.address;
                if (res.phonenum != undefined)
                  this.phoneNumber = res.phonenum;
                if (res.password != undefined)
                  this.passWord = res.password;
                
                console.log(res);
              },
              error => {
                // error on server
                console.log(error);
              }
            );
  }
  onCancle(nameInput: HTMLInputElement, phoneNumberInput: HTMLInputElement, passWordInput: HTMLInputElement,
    addressInput: HTMLTextAreaElement,areaInput: HTMLInputElement){
      nameInput.value = this.name;
      phoneNumberInput.value = this.phoneNumber;
      passWordInput.value = this.passWord;
      addressInput.value = this.address;
      areaInput.value = this.area;
  }
  
  onChange(nameInput: HTMLInputElement, phoneNumberInput: HTMLInputElement, passWordInput: HTMLInputElement,
          addressInput: HTMLTextAreaElement,areaInput: HTMLInputElement){
    
    this.name = nameInput.value;
    this.phoneNumber = phoneNumberInput.value;
    this.passWord = passWordInput.value;
    this.address = addressInput.value;
    this.area = areaInput.value;
    let id = document.cookie.split("=")[1];
    let data = {
      "id":id,
	    "password": this.passWord,
	    "name": this.name,
	    "section": this.area,
	    "address": this.address,
	    
    };
    this.httpApiService.update_c(data)
            .subscribe(
              res => {
                document.cookie = `user_id:${res._id}`;
                console.log(res);
              },
              error => {
                // error on server
                console.log(error);
              }
            );
    


    
  }

}
