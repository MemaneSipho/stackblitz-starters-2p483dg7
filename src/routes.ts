import {RouterModule,Routes} from '@angular/router';
import { Home } from './app/home/home';
import {About} from './app/about/about';
import {Career } from './app/career/career';
import  {Contact} from './app/contact/contact';
import{RouterLink} from '@angular/router';
const routerConfig : Routes = [
    {path: '',
    component : Home},
    { path: 'about',
    component : About},
    { path: 'career',
    component :Career },
    { path: 'contact',
    component :Contact }

    
] ;
export default routerConfig;

