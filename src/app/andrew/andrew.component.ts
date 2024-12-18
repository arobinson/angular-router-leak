import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { from, mergeMap, ReplaySubject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'bug-andrew',
  standalone: true,
  imports: [],
  templateUrl: './andrew.component.html',
  styleUrl: './andrew.component.scss'
})
export class AndrewComponent {
  readonly router = inject(Router);
  readonly onDestroy: ReplaySubject<void> = new ReplaySubject<void>(1);

  onClose(): void {
    timer(2_000)
      .pipe(
        mergeMap(() => from(this.router.navigate(['/homepage']))),
        takeUntil(this.onDestroy)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy.next(undefined);
    this.onDestroy.complete();
  }
}
