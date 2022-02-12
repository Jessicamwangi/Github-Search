import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string | undefined;
  private clientid = '';
  private clientsecret = '';

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'Jessicamwangi';
   }
   getProfileInfo () {
    return this.http.get("https//api.github.com/users/" + this.username )
   }
}
