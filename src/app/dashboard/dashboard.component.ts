import { Hero } from './../hero';
import { HeroService } from './../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) { 
    this.heroes = new Array<Hero>();
  }

  ngOnInit() {
      this.heroService.getHeroes().then(snapshot =>
        snapshot.forEach(childSnapshot => {
          this.heroes.push(childSnapshot.val());
           console.log(childSnapshot.val())
          })
      );
  }

}
