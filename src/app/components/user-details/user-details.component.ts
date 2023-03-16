import {Component, OnInit} from '@angular/core';
import {User} from "../../entities/user";
import {UserDetailsService} from "./services/user-details.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>

  constructor(private userDetails: UserDetailsService) {
  }

  ngOnInit(): void {
    this.user$ = this.userDetails.getUserDetails(1);
  }

}


