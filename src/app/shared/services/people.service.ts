import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'João',
        lastName: 'Souza',
        age: 23
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 21
      },
      {
        firstName: 'Jose',
        lastName: 'Santos',
        age: 24
      },
      {
        firstName: 'Marcio',
        lastName: 'Pereira',
        age: 32
      }
    ];
    return of(peopleArray);
  }
}
