import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {
  username: string;

  constructor(private _http: HttpClient) {
    console.log('Github Service Ready...');
    this.username =  'Jessicamwangi';

  }
  getUserInfo() {
    return this._http.get('https://api.github.com/users/' + this.username)
    .pipe(map(result => result));

  }
  getReposInfo() {
    return this._http.get(' https://api.github.com/users/' + this.username + '/repos')
    .pipe(map(result => result));
}
updateUser(username: string) {
  this.username = username;
}
}