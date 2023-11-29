import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  constructor(
    private router:Router,
  ){
    
    if(localStorage.getItem("isLogged") !== "true"){
      this.router.navigate(["/login"]);
      window.alert("firstly, you need to login");
    }
  }

  logOut(){
    localStorage.setItem("isLogged", "false");
    this.router.navigate(['/']);
  }
}
