import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }


  findAll(){
    return this.http.get(environment.endpoint.role);
  }

  save(role:any){
    return this.http.post(environment.endpoint.role, role);
  }
}
