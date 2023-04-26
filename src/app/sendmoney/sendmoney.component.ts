import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.css']
})
export class sendmoneyComponent {

  sendmoneyForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.sendmoneyForm = this.formBuilder.group({
      accountNo: [''],
      phoneNumber: [''],
      amount: [''],
      category: [''],
      

    })
  }

  // sendmoney Up Method
  public send(): void {
    let model = {
      accountNo: this.sendmoneyForm.value.accountNo,
      phoneNumber: this.sendmoneyForm.value.phoneNumber,
      amount: this.sendmoneyForm.value.amount,
      category: this.sendmoneyForm.value.category,


    }
    console.log("Working");

    console.log(this.sendmoneyForm.value);

    this._http.post<any>("http://10.20.33.70:8080/api/sendmoney", model).subscribe(res => {
      alert("sendmoney Completed Successfully");
      this.sendmoneyForm.reset();
      this.router.navigate(['/dashboard']);
    }, err => {
      alert("sendmoney Failed. Try Again")
    }
    )
  }

}




