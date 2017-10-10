import { AngularFireDatabase } from 'angularfire2/database';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import 'rxjs/add/operator/toPromise';
import * as firebase from "firebase";
import {ReplaySubject} from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class HeroService {

  private heroesUrl : any;
  private herosRef : any;
  private headers = new Headers({'Content-type': 'application/json'});

  

  constructor(private http: Http, private af: AngularFireDatabase) { 
    this.heroesUrl = firebase.database().ref('/heroes').toString();

    

  }

/*
  getHeroes(): Promise<Hero[]>{
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError)

  }

  private handleError(error: any): Promise<any>{
    console.error('Ocorreu um erro', error);
    return Promise.reject(error.message || error);

  }

  getHero(id: number): Promise<Hero>{
    const url = `${this.heroesUrl}/${id})`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  } 

  update(hero: Hero): Promise<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
  }

  create(name: string): Promise<Hero>{
    return this.http
    .post(this.heroesUrl, JSON.stringify(name), {headers: this.headers})
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void>{
    const url = `${this.heroesUrl}/${id}`
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);

  }*/




}
