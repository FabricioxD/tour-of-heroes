import { HeroService } from '../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Hero[];
  selectedHero: Hero;
  newHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
    this.heroes = new Array<Hero>();
    this.newHero = new Hero();
  }

  ngOnInit() {
    //this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().then(snapshot =>
      snapshot.forEach(childSnapshot => {
        this.heroes.push(childSnapshot.val());
         console.log(childSnapshot.val())
        })
    );
  }

  goToDetail(){
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  add(name: string){
    name = name.trim();
    if(!name) {return;}

    this.newHero = this.heroService.create(name);

    this.heroes.push(this.newHero);
    this.selectedHero = null;
    
  }

  delete(hero: Hero){
    this.heroService
    .delete(hero)
    .then(() => {
      this.heroes = this.heroes.filter(h => h !== h)
      if(this.selectedHero === hero) {this.selectedHero = null}
    })
  }

}
