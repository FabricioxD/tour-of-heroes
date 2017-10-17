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

  private baseUrl = 'https://tour-of-heroes-e2440.firebaseio.com/';  
  private headers = new Headers({'Content-type': 'application/json'});
  private newHero: Hero;
  constructor(private http: Http, private af: AngularFireDatabase) {
  }

  getHeroes(){
    return firebase.database().ref("heroes").orderByKey()
    .once("value");
  }

  getHero(id: string): Promise<Hero>{
    console.log("id: ",id);
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/heroes/${id}.json`).subscribe(res => resolve(res.json()));
    })
  }

  update(hero: Hero): Promise<Hero>{
    return firebase.database().ref('heroes/' + hero.id).set(hero);
  }

  create(heroName: string){
    var key = firebase.database().ref().child('heroes/').push().key;
    console.log("Key: ",key);
    this.newHero = new Hero();
    this.newHero.id = key;
    this.newHero.name = heroName;

    firebase.database().ref().child('/heroes/' + key).set(this.newHero);
    return this.newHero;
  }

  delete(hero: Hero){
    return firebase.database().ref().child('/heroes/' + hero.id).remove();

  }

  /*Diferenças update e set

    var postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0
    };

    Update
    var newPostKey = firebase.database().ref().child('posts').push().key;

    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);

    Set
     newPostKey = firebase.database().ref().child('posts').push().key;

    firebase.database().ref().child('/posts/' + newPostKey).set(postData);
    firebase.database().ref().child('/user-posts/' + uid + '/' + newPostKey).set(postData);

  */

}
