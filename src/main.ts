import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';

console.clear();
enableProdMode();


// Top level awaits currently get errors from vite, so just ignore the eslint rule in this file
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'andrewRoutes',
        loadChildren: (): Promise<any> => import('./app/andrew/andrew.routes').then((m) => m.andrewRoutes)
      },
      {
        path: 'andrewComponent',
        loadComponent: (): Promise<any> => import('./app/andrew/andrew.component').then((m) => m.AndrewComponent)
      },
      {
        path: 'andrewModule',
        loadChildren: (): Promise<any> => import('./app/andrew-with-module/andrew-with-module.module').then((m) => m.AndrewWithModuleModule)
      },
      {
        path: 'homepage',
        loadComponent: (): Promise<any> => import('./app/home-page/home-page.component').then((m) => m.HomePageComponent)
      },
      {
        path: '**',
        redirectTo: 'homepage'
      }
    ])
  ]
});
