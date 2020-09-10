import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NewsComponent } from './news/news.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'news', component: NewsComponent},
  { 
    path: 'profile', 
    loadChildren: './profile/profile.module#ProfileModule',
    canLoad: [LoginGuard],
    canActivate: [LoginGuard]
  },
  { path: 'auth', component: AuthComponent},
  { path: '**', component: HomeComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
  