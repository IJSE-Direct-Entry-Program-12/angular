import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello!';
  cards = [
    {title: "My Card 1", image: "1"},
    {title: "My Card 2", image: "2"},
    {title: "My Card 3", image: "3"},
    {title: "My Card 4", image: "4"},
    {title: "My Card 5", image: "5"},
  ];

  constructor() {
    console.log("Who the heck created me?")
  }

  removeCard(card: any){
    this.cards =
    this.cards.filter(c => c !== card)
  }
}
