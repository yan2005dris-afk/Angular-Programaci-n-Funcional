import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: "./counter.html",

    //css del componente
    styles:
    `button {
      padding: 10px 20px;
      margin: 5px 10px;
      width: 120px;
      background-color: darkcyan;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      text-align: center;      /* Centra el texto horizontalmente */
      transition: all 0.2s ease-in-out;  /* Animación al pasar el mouse */

    }

    /* Efecto al pasar el mouse */
    button:hover {
      background-color: #009999;  /* Un tono más claro */
      transform: scale(1.05);
    }

    `,

   changeDetection: ChangeDetectionStrategy.OnPush,

})

export class Counter{

    counter = 10;
    counterSignal = signal(10);

    constructor(){
    }


    increaseBy(value: number){
      this.counter += value;
      this.counterSignal.update((currentValue) => currentValue + value);
    }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
