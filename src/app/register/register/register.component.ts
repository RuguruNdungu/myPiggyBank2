import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

registerForm!: FormGroup

constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

ngOnInit(): void {
  this.registerForm = this.formBuilder.group({
    username: [''],
    email: [''],
    phoneNumber: [''],
    idNumber: [''],
    DOB: [''],

  })
}

// registerUp Method
registerUp() {


  let model = {
    username: this.registerForm.value.username,
    email: this.registerForm.value.email,
    phoneNo: this.registerForm.value.phoneNumber,
    Idnumber: this.registerForm.value.idNumber,
    DOB: this.registerForm.value.DOB
  }
  console.log("Working");
  
  console.log(this.registerForm.value);
  
  this._http.post<any>("http://10.20.33.70:8080/api/user/register", model).subscribe(res => {
    alert("Registration Completed Successfully");
    this.registerForm.reset();
    this.router.navigate(['/login']);
  }, err => {
    alert("Registration Failed. Try Again")
  }
  )
}
}


