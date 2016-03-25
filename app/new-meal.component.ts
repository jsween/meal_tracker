import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
      <input type="text" placeholder="Food" #newName>
      <input type="text" placeholder="Details" #newDetails>
      <input type="number" placeholder="Calories" #newCalories>
      <button (click)="addNewEntry(newName, newDetails, newCalories)" type="button">Enter a Meal</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addNewMeal() {
    console.log("creating food...");
  }
}
