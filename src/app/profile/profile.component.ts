import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = "marzie";
  area = "hal";
  address = "tehran/tehran";
  phoneNumber = "09120";
  passWord = "1378hello";



  constructor() { }

  ngOnInit(): void { //fk knm inja byd ettelate qablisho bgirim
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
    console.log(this.area);
  }

}
