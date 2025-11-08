import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Characters {
  id: number;
  name: string;
  power: number;
}

@Component({
  // no se utiliza porque es uan pagina selector: 'app-dragonball',
  //imports: [],
  templateUrl: './dragonball.html',
  imports: [NgClass],
  //styleUrl: './dragonball.css',
})
export class Dragonball {

  characters = signal<Characters[]>([
    {id:1, name: 'Goku', power:9001},
    {id:2, name: 'Vegeta', power: 8000},
    {id:3, name: 'Picolo', power: 3000},
    {id:4, name: 'Yamcha', power: 500 },
  ]);

  powerClasses = computed(()=>{
    return{
      'text-danger': true,
    };
  });

}
