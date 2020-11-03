import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Visit Mt. Kilimanjaro', 'Drive a Masserati', 'Own a Jaguar', 'Visit the greatwall of china']);
  goal = this.goals.asObservable(); 

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
