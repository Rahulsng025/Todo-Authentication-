import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'forget-password',
    loadChildren: () => import('./Auth/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'login-form',
    loadChildren: () => import('./Auth/login-form/login-form.module').then( m => m.LoginFormPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./Auth/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./Auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./Auth/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },

  {
    path: '**',
    redirectTo: 'login-form'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
