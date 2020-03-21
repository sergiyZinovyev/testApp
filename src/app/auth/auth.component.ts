import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
 
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  warning: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService 
  ) { }

  ngOnInit() {
    this.loginForm.statusChanges.subscribe(status => {
      this.warning = ''
     });
  }

  loginForm = this.fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  login(){
    console.log('summit form');
    if(this.loginForm.valid) {
      this.auth.authentication(this.loginForm.value)
        .then(()=> this.router.navigate(['/profile']))
        .catch(err => this.warning = err)
    }
    
  }

}
