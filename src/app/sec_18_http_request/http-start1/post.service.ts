import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Post} from "./post.model";
import {catchError, map, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

@Injectable({providedIn: "root"})
export class PostService {
  error = new Subject<string>();
  private readonly FIREBASE_URL = 'https://ng-complete-guide-12059-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{ name: string }>(
      this.FIREBASE_URL,
      postData,
      {
        observe: "response"
      }
    ).subscribe(response => {
        console.log(response.headers);
      },
      error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(this.FIREBASE_URL,
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          params: searchParams
        })
      .pipe(
        map((reponseData) => {
          const postArray: Post[] = [];
          for (const key in reponseData) {
            if (reponseData.hasOwnProperty(key)) {
              postArray.push({...reponseData[key], id: key});
            }
          }
          return postArray;
        }), catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        }));
  }

  clearPosts() {
    return this.http
      .delete<{ [key: string]: Post }>(this.FIREBASE_URL,
        {
          observe: "events",
        }).pipe(tap(event => {
        console.log(event);
        if (event.type == HttpEventType.Sent) {
          // event was sent
        }
        if (event.type == HttpEventType.Response) {
          console.log(event.body);
        }
      }));
  }
}
