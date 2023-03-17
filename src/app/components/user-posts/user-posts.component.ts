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

  getPostHeight(body: string): string {
    const el = document.createElement('div');
    el.innerHTML = body;
    const height = el.scrollHeight;
    if (height <= 100) {
      return "span 2";
    } else if (height <= 200) {
      return "span 3";
    } else if (height <= 300) {
      return "span 4";
    } else if (height <= 400) {
      return "span 5";
    } else {
      return "span 6";
    }
  }
}
