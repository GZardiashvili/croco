import {Component, OnInit} from '@angular/core';
import {User} from "../../entities/user";
import {UserDetailsService} from "./services/user-details.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>

  constructor(private router: Router, private route: ActivatedRoute, private userDetails: UserDetailsService) {
  }

  ngOnInit(): void {
    this.user$ = this.userDetails.getUserDetails(this.route.snapshot.params['id']);
  }

  viewUserPosts() {
    this.router.navigate(['posts'], {relativeTo: this.route}).then()
  }

}


