import { RoleService } from './../../services/role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  name:String;
  description:String;

  constructor(private roleSrv:RoleService) { }

  ngOnInit() {
  }

  

  save(){
    this.roleSrv.save( {name:this.name, description:this.description} ).subscribe();
  }

}
