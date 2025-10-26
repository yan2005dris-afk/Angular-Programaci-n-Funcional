import { Component, computed, signal} from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
  templateUrl: "./hero-page.html",
  imports: [UpperCasePipe],
})
export class Hero{

    age = signal(45);
    name = signal("Iroman");


    //las señales computadas nomas son de lecturas y su nuevo estado es una copia del original.
    capitalizedName = computed(()=> this.name().toUpperCase());

    heroDescription = computed(()=>{
      const description = `${this.name()} - ${this.age()}`;
      return description;
    });

    getHeroDescription(): string{
      return `${this.name()} - ${this.age()}`;
    }

    changeHero(){
      this.age.update(a => a = 22);
      this.name.update(n => n ='Spiderman')
    }

    resetForm(){
      this.name.update(n => n = 'Ironman');
      this.age.update(a => a = 45);
    }

    changeAge(){
      this.age.update(a => a = 60);
    }

}
