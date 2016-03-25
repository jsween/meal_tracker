import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
      <input type="text" placeholder="Food Name" #newName>
      <input type="text" placeholder="Details" #newDetails>
      <input type="number" placeholder="Number of Calories" #newCalories>
      <button (click)="addNewMeal(newName, newDetails, newCalories)" type="button">Enter a Meal</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addNewMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var newMeal = new Meal(newName.value, newDetails.value, parseInt(newCalories.value), 0);
    console.log(newMeal);
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
