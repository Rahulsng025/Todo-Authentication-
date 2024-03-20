import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Service/authentication.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user$!: Observable<any>

  constructor(public afAuth: AngularFireAuth,
    private authService: AuthenticationService) {}

  ngOnInit(){
    this.user$ = this.afAuth.authState
 }

  logout(){
    this.authService.SignOut();
  }

}
