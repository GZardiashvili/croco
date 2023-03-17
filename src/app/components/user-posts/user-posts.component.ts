import {Component, OnInit} from '@angular/core';
import {Post} from "../../entities/post";
import {Observable} from "rxjs";
import {UserPostsService} from "./services/user-posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts$!: Observable<Post[]>;


  constructor(private route: ActivatedRoute, private userPostsService: UserPostsService) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      console.log(userId);
      userId ? this.posts$ = this.userPostsService.getPosts(+userId) : this.posts$ = new Observable<Post[]>();
    });
  }


}
