import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(public authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    this.router.navigateByUrl('login-form', {replaceUrl: true})
  }

}
