import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./post.model";
import {PostService} from "./post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-http-start1',
  templateUrl: './http-start1.component.html',
  styleUrls: ['./http-start1.component.css']
})
export class HttpStart1Component implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient,
              private postService: PostService) {
  }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
      });
  }

  onClearPosts() {
    this.postService.clearPosts()
      .subscribe(response => {
        this.loadedPosts = [];
      });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onHandleError() {
    this.error = null;
  }
}
