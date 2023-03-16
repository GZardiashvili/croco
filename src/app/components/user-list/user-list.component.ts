import {Component, OnInit} from '@angular/core';
import {UserListService} from "./services/user-list.service";
import {User} from "../../entities/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users!: Observable<User[]>

  constructor(private userList: UserListService) {
  }

  ngOnInit() {
    this.users = this.userList.getUsers();
  }
}
