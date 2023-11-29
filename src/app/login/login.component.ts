import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm:FormGroup;
  showError: boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    ){

    this.checkoutForm = this.formBuilder.group({
      login:"",
      password:"",
    })
  }

  onSubmit(loginData:any){

    if(loginData.login === "Admin" && loginData.password === "12345"){
      console.log(loginData);

      this.checkoutForm.reset();
      this.showError = false;
      this.router.navigate(['/profile']);
      localStorage.setItem("isLogged", "true");
    }
    else{
      this.showError = true;
      localStorage.setItem("isLogged", "false");

    }
    
  }


}
