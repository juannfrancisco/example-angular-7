import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:any;
  displayedColumns: string[] = ['name', 'email', 'role'];

  constructor( private srvUser:UserService) { }

  ngOnInit() {
    this.srvUser.findAll().subscribe( data=>{ this.users = data; } );
  }

}
