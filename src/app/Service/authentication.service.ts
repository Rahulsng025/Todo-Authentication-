import { Injectable, NgZone} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../Model/user';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  name: string = '';
  email: string = '';
  password: string = '';
  user$!: Observable<any>;
  users$: Observable<any>;

  constructor(public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public http: HttpClient,
    public router: Router) {
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user=>{
          if(user){
            // user is signed in
            return of(user)
          } else {
            return of(null);
          }
        })
      )

      this.users$ = afAuth.authState
     }


    
SignIn( email:any, password:any, rememberMe: boolean = false){
  return this.afAuth.signInWithEmailAndPassword(email,password)
  .then((result)=>{
    this.ngZone.run(()=>{
      this.router.navigate(['home']);
    })
    this.SetUserData(result.user)
    if(rememberMe){
      localStorage.setItem('user', JSON.stringify(result.user))
    }
  })
  .catch((error)=>{
    window.alert(error.message)
    console.log('Handle error response')
  })
}



SignUp(displayName: string, email:any, password:any): Promise<any>{
  return this.afAuth.createUserWithEmailAndPassword(email,password)
  .then((result)=>{
    this.SendVerificationMail();
    this.SetUserData(result.user);
    result.user?.updateProfile({
      displayName: displayName
    })
    // return result
  })
  .catch((error)=>{
    window.alert(error.message);
  })
}



ForgotPassword(passwordResetEmail:any){
  return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
  .then(()=>{
    window.alert('Password reset email sent, check your inbox')
  })
  .catch((error)=>{
    window.alert(error);
  })
}

SignOut(){
  return this.afAuth.signOut().then(()=>{
    localStorage.removeItem('user')
    this.router.navigate(['login-form'])
  })
}

SendVerificationMail() {
  return this.afAuth.currentUser
    .then((user: any) => {
      return user.sendEmailVerification();
    })
    .then(() => {
      this.router.navigate(['verify-email']);
    });
}

SetUserData(user: any) {
  const userRef: AngularFirestoreDocument = this.afs.doc(`users/${user.uid}`);
  const userData: User = {
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
  };
  return userRef.set(userData, {
    merge: true,
  });
}

}


