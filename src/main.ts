import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Router} from '@angular/router';
import routerConfig from './app/Routes';
import {ProviderRouter} from '@angular/routers';
@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <button (click)="counter.set(counter() - 1)">--</button>
    <span> Counter: {{ counter() }} </span>
    <button (click)="counter.set(counter() + 1)">++</button>
   ` 
  ,

})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App,{ providers : ProviderRouter(routerConfig)});