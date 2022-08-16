import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { RootServiceService } from 'src/app/root-service.service';
import { rxjsAutoUnsubscribe } from 'src/app/RxjsAutoUnsubscribe';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
/**
 * Fix Method 1 - automatic unsibscribe.
 * Uncomment `rxjsAutoUnsubscribe` decorator to fix memory and DOM node leak.
 * You must store each subscription in its own class field for automatic unsubscription to work.
 */

//@rxjsAutoUnsubscribe
export class CompAComponent implements OnInit, OnDestroy {
  @ViewChild('compap', { static: false }) compa: any;

  private id = this.getRandomInt(1000);
  private destroy$ = new Subject<void>();
  private infSubscription?: Subscription;

  constructor(private rootService: RootServiceService) {}

  ngOnInit(): void {
    this.infSubscription = this.rootService.infiniteStream$
      // Fix Method 2 - dedicated destroy$ stream
      // uncomment this to fix memory and DOM node leak

      //.pipe(takeUntil(this.destroy$))
      .subscribe((n) => {
        console.log(`comp-a#${this.id} rootService$.subscribe:`, n);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log(`comp-a${this.id} ngOnDestroy`);
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
