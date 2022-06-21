import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RootServiceService } from 'src/app/root-service.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit, OnDestroy {
  @ViewChild('compap', { static: false }) compa: any;

  id = this.getRandomInt(1000);
  destroy$ = new Subject<void>();

  constructor(private rootService: RootServiceService) {}

  ngOnInit(): void {
    this.rootService.infiniteStream$
      //.pipe(takeUntil(this.destroy$)) // uncomment to fix memory and DOM node leak
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
