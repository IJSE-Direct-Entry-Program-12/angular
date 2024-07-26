import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private value = signal(10);

  constructor() {
    console.log("Value Service Created");
  }

  public getValue(): number{
    return this.value();
  }

  public updateValue(value: number){
    this.value.set(value);
  }
}
