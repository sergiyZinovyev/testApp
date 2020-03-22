import { Injectable } from '@angular/core';
import {Login} from './login';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class AuthService {

  url: string = 'https://visitors.galexpo.com.ua:7002';

  constructor(private http: HttpClient){}

  getAuth(value: Login): Observable<any>{
      return this.http.post(`${this.url}/fakeauth`, value)    
  }

  authentication(data: Login): Promise<boolean>{
    localStorage.clear();
    return new Promise((resolve, reject) => {
      this.getAuth(data).subscribe((data: {auth:Boolean}) => {
        if(data.auth) {
          localStorage.setItem('login', 'true');
          return resolve (true)
        }
        else {
          localStorage.setItem('login', 'false');
          return reject ('The username or password you entered is incorrect')
        }
      })
    })
  }  
    
    
  
}
