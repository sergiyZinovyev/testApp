import { Injectable } from '@angular/core';
import {Login} from './login';

@Injectable()
export class AuthService {

  login: Login = {
    login: 'admin',
    password: '12345'
  }

  constructor() { }

  authentication(data: Login): Promise<boolean>{
    localStorage.clear();
    console.log('auth work!');
    console.log(data);
    return new Promise((resolve, reject) => {
      if(data.login === this.login.login && data.password === this.login.password) {
        localStorage.setItem('login', 'true');
        return resolve (true)
      }
      else {
        localStorage.setItem('login', 'false');
        return reject ('The username or password you entered is incorrect')
      }
    })
  }  
    
    
  
}
