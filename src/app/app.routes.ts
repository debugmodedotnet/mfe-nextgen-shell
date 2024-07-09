import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import {NotfoundComponent} from './components/notfound/notfound.component'

export const APP_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
  
    // Add this route:
    {
      path: 'powerbiadmin',
      loadComponent: () =>
        loadRemoteModule('powerbiadmin', './Component').then((m) => m.AppComponent),
    },
    {
        path: 'price',
        loadComponent: () =>
          loadRemoteModule('price', './Component').then((m) => m.AppComponent),
      },
      {
         path:'home',
         component:HomeComponent
      },
  
    {
      path: '**',
      component: NotfoundComponent,
    },
  
    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.
  ];
