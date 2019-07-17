import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../users-list/search.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User: {} = {
    avatar: "Avatar",
    name: "Name",
    login: "Login",
    created_at: "",
    location: "Location",
    company: "Conpany",
    email: "Email"
  };
  userRepos;
  error: any;
  getUsersSub$;
  getReposSub$;
  constructor(private httpService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    this.getUsersSub$ = this.httpService.getUser(userName).subscribe(
      user => this.User = user,
      error => { this.error = error.message; console.log(error); });
    this.getReposSub$ = this.httpService.getRepos(userName).subscribe(
      repos => this.userRepos = repos.slice(0, 5),
      error => { this.error = error.message; console.log(error); });
  }

  ngOnDestroy() {
    this.getUsersSub$.unsubscribe();
    this.getReposSub$.unsubscribe();
  }
}
