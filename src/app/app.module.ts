import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule } from '@angular/material';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { RoleCreateComponent } from './components/role-create/role-create.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, ListUserComponent, CreateUserComponent, RoleCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
