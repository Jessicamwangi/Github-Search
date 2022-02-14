import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile-service/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProfileService]
})
export class AppComponent {
  title = 'GithubSearch';
}
