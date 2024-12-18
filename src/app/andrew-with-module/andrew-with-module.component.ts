import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { from, mergeMap, ReplaySubject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'bug-andrew-with-module',
  standalone: false,
  templateUrl: './andrew-with-module.component.html',
  styleUrl: './andrew-with-module.component.scss'
})
export class AndrewWithModuleComponent {
  readonly router = inject(Router);
  readonly onDestroy: ReplaySubject<void> = new ReplaySubject<void>(1);

  onClose(): void {
    window.setTimeout(() => {
      this.router.navigate(['/homepage']).catch((err) => {
        console.error(err);
      });
    }, 2_000);
  }

  onClose2(): void {
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
