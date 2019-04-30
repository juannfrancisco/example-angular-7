import { RoleService } from './../../services/role.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  name:String;
  password:String;
  email:String;
  role:any;
  roles:any[];
  

  constructor( private userSrv:UserService, 
              private roleSrv:RoleService ) { }

  ngOnInit() {
    this.roleSrv.findAll().subscribe(  );
  }


  saveUser(){

    this.userSrv.save( {name:this.name, password:this.password, email:this.email, role:{id:1}} ).subscribe();
    console.log( this.name );
    console.log( this.password );
    console.log( this.email );
  }

}
