import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import {Hero} from './pages/hero/hero-page';

export const routes: Routes = [
   {
    path:'', component: Counter
   },

   {
    path:'hero-page', component: Hero
   },
   {
    path:'**',
    redirectTo:''
   },


];
