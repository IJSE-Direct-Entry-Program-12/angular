import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private valueSubject =
    new BehaviorSubject(20);

  constructor() {
    console.log("Value Service Created");
  }

  public getValue(): Subject<number>{
    return this.valueSubject;
  }

  public updateValue(value: number){
    this.valueSubject.next(value);    // notify
  }
}
