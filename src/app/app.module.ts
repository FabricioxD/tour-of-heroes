import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeroService } from './services/hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }        from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.services';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from "firebase";
import { AngularFireDatabase } from 'angularfire2/database';



export const config = {
    apiKey: "AIzaSyBNM867kkM8y4Q9I4gZfU_mL8ydlvLPP90",
    authDomain: "tour-of-heroes-e2440.firebaseapp.com",
    databaseURL: "https://tour-of-heroes-e2440.firebaseio.com",
    projectId: "tour-of-heroes-e2440",
    storageBucket: "tour-of-heroes-e2440.appspot.com",
    messagingSenderId: "1027692594316"
  };

firebase.initializeApp(config);
  

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
    
   
    
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  
  bootstrap: [ AppComponent ],

  providers: [HeroService, AngularFireDatabase]
})
export class AppModule { }
