import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'bug-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly router = inject(Router);
  goToStandalone(): void {
    this.router.navigate(['andrewComponent']).catch((err) => {
      console.error(err);
    });
  }

  goToStandaloneViaRoutes(): void {
    this.router.navigate(['andrewRoutes']).catch((err) => {
      console.error(err);
    });
  }

  goToModule(): void {
    this.router.navigate(['andrewModule']).catch((err) => {
      console.error(err);
    });
  }
}
