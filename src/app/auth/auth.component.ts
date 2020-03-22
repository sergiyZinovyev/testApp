import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
 
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  warning: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService 
  ) { }

  ngOnInit() {
    this.loginForm.statusChanges.subscribe(() => this.warning = '');
  }

  loginForm = this.fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  login(){
    if(this.loginForm.valid) {
      this.auth.authentication(this.loginForm.value)
        .then(()=> this.router.navigate(['/profile']))
        .catch(err => this.warning = err)
    }
    
  }

}
