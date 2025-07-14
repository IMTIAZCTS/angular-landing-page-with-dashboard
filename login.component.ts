import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
myForm:FormGroup;
msg:string='';
error1:string='';
loading: boolean = false;

constructor(private router:Router){  
  this.myForm= new FormGroup({
  userName: new FormControl('',[Validators.required,Validators.minLength(6)]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });  
}

/*validate(): void {
  const userNameEmpty = this.myForm.get('userName')?.hasError('required');
  const passwordEmpty = this.myForm.get('password')?.hasError('required');

  if (this.myForm.invalid) {
    if (userNameEmpty && passwordEmpty) {
      this.msg = 'Enter Username and Password';
    } else if (userNameEmpty) {
      this.msg = 'Enter Username';
    } else if (passwordEmpty) {
      this.msg = 'Enter Password';
    } else {
      this.msg = 'Please fix the form errors';
    }
    this.error1 = 'red';
    return;
  }

  const { userName, password } = this.myForm.value;
  if (userName === 'admin123' && password === 'admin123') {
    this.msg = 'SUCCESSFULLY LOGIN';
    this.error1 = 'green';
    this.router.navigate(['dashboard']);
  } else {
    this.msg = 'INVALID USERNAME AND PASSWORD';
    this.error1 = 'red';
  }

  this.myForm.reset();
}*/
//adding spinner
/*
validate(): void {
  const userNameEmpty = this.myForm.get('userName')?.hasError('required');
  const passwordEmpty = this.myForm.get('password')?.hasError('required');

  if (this.myForm.invalid) {
    if (userNameEmpty && passwordEmpty) {
      this.msg = 'Enter Username and Password';
    } else if (userNameEmpty) {
      this.msg = 'Enter Username';
    } else if (passwordEmpty) {
      this.msg = 'Enter Password';
    } else {
      this.msg = 'Please fix the form errors';
    }
    this.error1 = 'red';
    return;
  }

  const { userName, password } = this.myForm.value;
  if (userName === 'admin123' && password === 'admin123') {
    this.msg = 'SUCCESSFULLY LOGIN';
    this.error1 = 'green';
    this.loading = true; // show loading spinner

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['dashboard']);
    }, 2000); // simulate delay
  } else {
    this.msg = 'INVALID USERNAME AND PASSWORD';
    this.error1 = 'red';
  }

  this.myForm.reset();
}*/
validate(): void {
  const userNameEmpty = this.myForm.get('userName')?.hasError('required');
  const passwordEmpty = this.myForm.get('password')?.hasError('required');

  // ✋ Show validation messages
  if (this.myForm.invalid) {
    this.loading = false; // ensure spinner is hidden
    if (userNameEmpty && passwordEmpty) {
      this.msg = 'Enter Username and Password';
    } else if (userNameEmpty) {
      this.msg = 'Enter Username';
    } else if (passwordEmpty) {
      this.msg = 'Enter Password';
    } else {
      this.msg = 'Please fix the form errors';
    }
    this.error1 = 'red';
    return;
  }

  const { userName, password } = this.myForm.value;
  if (userName === 'admin123' && password === 'admin123') {
    this.msg = 'SUCCESSFULLY LOGIN';
    this.error1 = 'green';
    this.loading = true; // show spinner

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['dashboard']);
    }, 2000);
  } else {
    this.msg = 'INVALID USERNAME AND PASSWORD';
    this.error1 = 'red';
    this.loading = false; // don't show spinner
  }

  this.myForm.reset();
}

}