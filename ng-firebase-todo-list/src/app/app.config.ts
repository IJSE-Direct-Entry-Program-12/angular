import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(
      {
        "projectId": "ng-firebase-todo-list-56764",
        "appId": "1:216679237743:web:b2a06010ec5a126eaee59a",
        "storageBucket": "ng-firebase-todo-list-56764.appspot.com",
        "apiKey": "AIzaSyAyV3J8blrcDJMjIR1hOoyKn8ZfTZKNGiM",
        "authDomain": "ng-firebase-todo-list-56764.firebaseapp.com",
        "messagingSenderId": "216679237743"
      })), provideAuth(() => getAuth())]
};
