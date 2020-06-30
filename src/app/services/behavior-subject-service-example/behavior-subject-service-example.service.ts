import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// PATTERN: Service with a Subject

interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectServiceExampleService {
  private musers$ = new BehaviorSubject<User[]>([]);

  get users$(): Observable<User[]> {
    return this.musers$;
  }

  public readonly usersAlt$: Observable<User[]> = this.musers$.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  loadAll() {
    this.httpClient.get<User[]>('aoi/users')
      .subscribe(users => this.musers$.next(users));
  }
}
