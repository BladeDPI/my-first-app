import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home13.component.html',
  styleUrls: ['./home13.component.css']
})
export class Home13Component implements OnInit, OnDestroy {
  private firstObsSubsiction: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubsiction = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complate();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000)
    });
    this.firstObsSubsiction = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.valueOf());
    }, () => {
      console.log('Completed!')
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubsiction.unsubscribe();
  }
}
