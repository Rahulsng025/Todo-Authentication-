import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(public authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    this.router.navigateByUrl('login-form', { replaceUrl: true })
  }

  navigateToReset(){
    this.router.navigate(['/password-reset'])
  }

}
