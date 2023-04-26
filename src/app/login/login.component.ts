import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      otp: [''],

    })
  }

  // login Up Method
  public signIn() {
    let model = {
      email: this.loginForm.value.email,
      otp: this.loginForm.value.otp,

    }
    console.log("Working");

    console.log(this.loginForm.value);

    this._http.post<any>("http://10.20.33.70:8080/api/user/login", model).subscribe(res => {
      alert("login Completed Successfully");
      this.loginForm.reset();
      this.router.navigate(['/dashboard']);
    }, err => {
      alert("login Failed. Try Again")
    }
    )
  }

}




