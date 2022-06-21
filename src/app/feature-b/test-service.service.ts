import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  infiniteStream$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  timerSource$ = interval(2000);

  constructor() {
    this.timerSource$.subscribe(() => {
      this.infiniteStream$.next(true);
    });
  }
}
