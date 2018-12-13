import { Injectable } from '@angular/core';
import { Hero } from '../Models/Hero';
import { HEROES } from '../Models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../Services/messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
