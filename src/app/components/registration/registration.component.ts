import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder,private register:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    firstName:'',
    lastName:'',
    userName:'',
    password:'',
    rePassword:'',
    email:'',
    category:''
  })

  signUp():void{
    const data = {
      username: this.registerForm.controls.userName.value,
      fname: this.registerForm.controls.firstName.value,
      lname: this.registerForm.controls.lastName.value,
      pswd: this.registerForm.controls.password.value,
      category: this.registerForm.controls.category.value,
      email: this.registerForm.controls.email.value
    };

    this.register.saveData(data).subscribe(resp=>{
      console.log('registed!!!');
      this.route.navigate(['/login']);
    });
  }

}
