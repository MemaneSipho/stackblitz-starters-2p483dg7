import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Router} from '@angular/router';
import routerConfig from './routes'
import {provideRouter} from '@angular/router';
import {RouterOutlet,RouterLink} from '@angular/router'
@Component({
  selector: 'app-root',
  imports : [RouterOutlet,RouterLink],
  template: `
    <h1><a routerLink="/home">Home</a>{{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <button (click)="counter.set(counter() - 1)">--</button>
    <span> Counter: {{ counter() }} </span>
    <button (click)="counter.set(counter() + 1)">++</button>
  <router-outlet></router-outlet>
  ` 
  ,

})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App,{ providers : [provideRouter (routerConfig)]});