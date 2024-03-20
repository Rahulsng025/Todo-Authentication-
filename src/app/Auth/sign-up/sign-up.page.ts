import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { UtilsService } from 'src/app/Service/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public passwordType: string = 'password';
  public passwordIcon: string = 'eye-off';
  termsChecked: boolean = false;
  email!: string;
  password!: string
  displayName!: string



  constructor(public authService: AuthenticationService,
    private router: Router,
    private utils: UtilsService) { }

  ngOnInit() {
  }



  signUp() {
    if(!this.displayName || this.displayName.trim() === ""){
      this.utils.showToaster('Name is not an empty')
    } 
    else if(!this.email || this.email.trim() === ""){
      this.utils.showToaster("Email is not an empty")
    }
    else if(!this.password || this.password.trim() === ""){
      this.utils.showToaster("Password is not an empty")
    } 
    else {
      this.authService.SignUp(this.displayName, this.email, this.password);
    
    }
 
  }

  redirect(ev: any, url: string) {
    this.router.navigateByUrl(url, { replaceUrl: true });
   
  }

  
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }


}
