import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import routerConfig from './routes'
import {provideRouter} from '@angular/router';
import {RouterOutlet, RouterLink, withInMemoryScrolling  } from '@angular/router'
@Component({
  selector: 'app-root',
  imports : [RouterOutlet,RouterLink],
  template: `<router-outlet></router-outlet> ` 
  ,

})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App, {
  providers: [
    provideRouter(
      routerConfig,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    )
  ]
});