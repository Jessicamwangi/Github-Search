import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string | undefined;
  private clientid = ' Iv1.371be666824d7a51';
  private clientsecret = '53388e8c6cdd6a556e1e25e2e452ffc87352a125';

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'Jessicamwangi';
   }
   getProfileInfo () {
    return this.http.get("https://api.github.com/users/" + this.username + " ?client_id= " + this.clientid + " &client_secret= " + this.clientsecret)
    .pipe(map((res:any) => res.json()));
   }
}
