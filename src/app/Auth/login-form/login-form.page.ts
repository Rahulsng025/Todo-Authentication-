import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { UtilsService } from 'src/app/Service/utils.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  userdata: any;
  passdata: any;
  socialService: any;
  userEmail!: string;
  userPwd!: string;
  displayName!: string;
  rememberMe: boolean = false;


  public passwordType: string = 'password';
  public passwordIcon: string = 'eye-off';

  constructor(public authService: AuthenticationService,
    private router: Router,
    private utils: UtilsService) { }

  ngOnInit() {
  
  }

  
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  sigin() {
    if(!this.userEmail || this.userEmail.trim() === " ") {
      this.utils.showToaster('Email is not an empty');
    } else if(!this.userPwd || this.userPwd.trim() === " ") {
      this.utils.showToaster('Password is not an empty');
    } else {
      this.authService.SignIn( this.userEmail, this.userPwd, this.rememberMe);
    }
  }

  
  forgotPassword() {
    this.router.navigateByUrl('forget-password', { replaceUrl: true });
  }

  singUpRedirect() {
    this.router.navigateByUrl('sign-up', { replaceUrl: true });
  }


}
