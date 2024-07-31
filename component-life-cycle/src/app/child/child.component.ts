import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  value: string = "";
  @ViewChild("h1")
  h1ElmRef!: ElementRef;
  @ContentChild("crazy")
  crazyRef!: ElementRef;

  static {
    console.log("0. Static Initializer")
  }

  constructor() {
    console.log("1.Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2.OnChanges", changes)
  }

  ngOnInit(): void {
    console.log("3.OnInit")
  }

  ngDoCheck(): void {
    console.log("4.DoCheck")
    console.log(this.h1ElmRef, this.crazyRef);
  }

  ngAfterContentInit(): void {
    console.log("5.AfterContentInit")
    console.log(this.h1ElmRef, this.crazyRef);
  }

  ngAfterContentChecked(): void {
    console.log("6.AfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("7.AfterViewInit")
    console.log(this.h1ElmRef, this.crazyRef);
  }

  ngAfterViewChecked(): void {
    console.log("8.AfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("9.OnDestroy")
  }

}
