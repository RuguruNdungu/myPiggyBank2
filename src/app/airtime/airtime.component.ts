import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.css']
})
export class AirtimeComponent {
  
    constructor(private router: Router) {}

onCall(){
  this.router.navigate(['/myphone']);
};
onTO(){
  this.router.navigate(['/otherphone']);
};

}