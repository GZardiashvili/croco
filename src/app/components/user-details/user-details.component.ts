import {Component, OnInit} from '@angular/core';
import {User} from "../../entities/user";
import {UserDetailsService} from "./services/user-details.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>

  constructor(private route: ActivatedRoute, private userDetails: UserDetailsService) {
  }

  ngOnInit(): void {
    this.user$ = this.userDetails.getUserDetails(this.route.snapshot.params['id']);
  }

}


