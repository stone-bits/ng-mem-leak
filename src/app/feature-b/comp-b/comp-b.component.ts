import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit, OnDestroy {
  id = this.getRandomInt(1000);
  destroy$ = new Subject<void>();

  constructor(private testService: TestServiceService) {}

  ngOnInit(): void {
    this.testService.infiniteStream$
      .pipe(takeUntil(this.destroy$))
      .subscribe((n) => {
        console.log(`comp-b${this.id} testService$.subscribe:`, n);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log(`comp-b${this.id} ngOnDestroy`);
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
