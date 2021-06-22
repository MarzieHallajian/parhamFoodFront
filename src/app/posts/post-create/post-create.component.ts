import { sharedStylesheetJitUrl } from "@angular/compiler";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpApiService } from "../../services/http-api.service";
import { Customer } from "../../backend-models/customer.model";
@Component({
    selector:'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{

    passWord = "";
    phoneNumber = "";
    area = "";
    address = "";
    name = "";
    loginCheckPass = true;
    loginCheckPhoneNumber = true;
    loginAuthentication = true;
    // outCheckPass :any;
    outCheckPhoneNumber: any;
  
    constructor( private httpApiService: HttpApiService ){}

    onPress() {
       
      // this.testInputRegExp(this.input,'[~!@#$%^&*([\'\/\`\])-=+,.?":;{}|<>]');
      this.testInputMatch(this.phoneNumber,/^[0-9]*/);
  
    }
  
    // testInputRegExp(text:any, pattern:any): void {
    //   const reg = new RegExp(pattern);
    //   this.outCheckPass = reg.test(text);
    // }
  
    testInputMatch(text:any, pattern:any): void {

      this.outCheckPhoneNumber = text.match(pattern);
      console.log(this.outCheckPhoneNumber.toString().length, this.phoneNumber.length, this.outCheckPhoneNumber.toString() );
      if (this.outCheckPhoneNumber == "") {
          this.loginCheckPhoneNumber = false;
      }else{
          if(this.outCheckPhoneNumber.toString().length == this.phoneNumber.length && this.outCheckPhoneNumber.toString().length == 11){
            this.loginCheckPhoneNumber = true;
          }
          else{
              this.loginCheckPhoneNumber = false;
          
            }
          }
}


    onLogin(){
        console.log(this.passWord);
        console.log(this.phoneNumber);
        //bfrstim
        let data={
          "phonenum": this.phoneNumber,
	        "password": this.passWord
        }
        this.httpApiService.login_c(data)
            .subscribe(
              res => {
                // successful login
                this.httpApiService.customer = res;
                console.log(this.httpApiService.customer);
              },
              error => {
                // error on server
                console.log(error);
              }
            );
    }
    onRegister(){
        console.log(this.phoneNumber);
        console.log(this.passWord);
        console.log(this.httpApiService.customer);
        //check mishe password
        // if (this.passWord.length < 8) {
            
        // }else if (this.passWord) {
            
        // }

        //mifrstim
    }

    // patternPhoneNumber = (function() {
    //     var regexp = /^[0-9]*$/;
    //     return {
    //       test: function(value) {
    //         if (this.phoneNumber === false) {
    //           return true;
    //         }
    //         return regexp.test(value);
    //       }
    //     };
    //   })();


    

    // @Output () postCreated = new EventEmitter();
    
    // onAddPost(){
    //     const post = {title: this.enteredTitle,
    //                     content: this.enteredContent};
        
    //     // this.newPost = this.enteredValue;
    //     this.postCreated.emit(post);
        
    // }


}