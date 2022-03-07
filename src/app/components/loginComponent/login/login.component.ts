import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.builder.group({
    userName : '',
    password : ''
  })

  login(){
    this.loginForm;
    console.log('LOGIN',this.loginForm);
  }

}
