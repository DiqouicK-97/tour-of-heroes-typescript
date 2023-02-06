import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  
  heroes: Hero[] = [
    {id : 1, name : 'Batman', superPower : 'Riche'},
    {id : 2, name : 'Superman', superPower : 'Alien'},
    {id : 3, name : 'Spiderman', superPower : 'Capacité d\'une arraignée'},
    {id : 4, name : 'Catwoman', superPower : 'Agilité et Discrétion'},
    {id : 5, name : 'Wonder Woman', superPower : 'Super-force'},
  ];

  selectedHero : Hero;

  constructor() { }

  selectHero(hero : Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
