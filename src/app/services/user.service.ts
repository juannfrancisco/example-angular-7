import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  save(user:any){
    return this.http.post(environment.endpoint.user, user);
  }

  findAll(){
    return this.http.get( environment.endpoint.user );
  }
}
