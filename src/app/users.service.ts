import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  postData(data: any) {

    const url = 'https://2446-41-90-101-26,ngrok-free.app/api/user/register';
    this.http.post(url, data);
  }
}
