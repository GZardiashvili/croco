import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../entities/post";

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  constructor(private http: HttpClient) {
  }

  getPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
