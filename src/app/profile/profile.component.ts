import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Users: any=[];
  Repos: any=[];
  username!: string;

  constructor(private profileService: ProfileService) {
    this.profileService.getUserInfo().subscribe(user => {
      console.log(user);
      this.Users = user;
    });
    this.profileService.getReposInfo().subscribe(repos => {
      // console.log(user);
      this.Repos = repos;
    });
   }

  ngOnInit(): void {
  }

}
