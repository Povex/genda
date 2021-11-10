import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = "";
  password = "";

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
    ) { }

  ngOnInit(): void {
    console.log("logged", this.authenticationService.isLoggedIn);
    if(this.authenticationService.isLoggedIn)
      this.router.navigate(['/todo-list']);
  }
 

  onLoginClick(){
    if(this.authenticationService.login(this.email, this.password)){
      this.router.navigate(['/todo-list/activities']);
    }
  }
}
