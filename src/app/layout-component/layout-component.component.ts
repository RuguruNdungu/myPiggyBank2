import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.css']
})
export class LayoutComponentComponent {
  constructor(private router: Router) {}

  onContinue() { 
    this.router.navigate(['/sendmoney']);
  }

  onClick() {
    this.router.navigate(['/register']);
  };
  onClicks() { 
    this.router.navigate(['/about']);
  };
  onGo() {
    this.router.navigate(['/login']);
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
onCall(){
  this.router.navigate(['/myphone']);
};
onTO(){
  this.router.navigate(['/otherphone']);
};
// onClicking() { 
//   this.router.navigate(['/my phone']);
//   
}