import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import {Hero} from './pages/hero/hero-page';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [
  // path va el nombre del html,  y component es la clase del  .ts
   {
    path:'',
    component: Counter
   },
   {
    path:'hero-page',
    component: Hero
   },
   {
    path:'dragonball',
    component: Dragonball
  },
   {
    path:'**',
    redirectTo:''
   },
];
