import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
constructor(private router:Router){}


onContinue() { 
  this.router.navigate(['/sendmoney']);
};
onNext() {
  this.router.navigate(['/request']);
};
onCommand() {
  this.router.navigate(['/lipa']);
};
onStart(){
  this.router.navigate(['/airtime']);
};
}