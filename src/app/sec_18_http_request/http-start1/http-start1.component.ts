import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Post} from "./post.model";

@Component({
  selector: 'app-http-start1',
  templateUrl: './http-start1.component.html',
  styleUrls: ['./http-start1.component.css']
})
export class HttpStart1Component implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {
  }

  private readonly FIREBASE_URL = 'https://ng-complete-guide-12059-default-rtdb.firebaseio.com/posts.json';

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post<{ name: string }>(
      this.FIREBASE_URL,
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{ [key: string]: Post }>(this.FIREBASE_URL)
      .pipe(map((reponseData) => {
        const postArray: Post[] = [];
        for (const key in reponseData) {
          if (reponseData.hasOwnProperty(key)) {
            postArray.push({...reponseData[key], id: key});
          }
          return postArray;
        }
      }))
      .subscribe(posts => {
        console.log(posts);
      });
  }
}
