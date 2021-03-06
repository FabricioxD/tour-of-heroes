import { HeroService } from './../services/hero.service';
import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit  {

  constructor(private heroService: HeroService, private route: ActivatedRoute,
  private location: Location){}

  hero: Hero;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.switchMap((params: ParamMap) => 
    this.heroService.getHero(params.get('id')))
    .subscribe(hero => {this.hero = hero; console.log("Hero: ",hero)});
  }

  goBack(){
    this.location.back();
  }

  save(){
    this.heroService.update(this.hero)
    .then(() => this.goBack());
  }


}
