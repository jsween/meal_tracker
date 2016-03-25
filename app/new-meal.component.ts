import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
      <h3>Enter a Meal to Your Daily Log</h3>
      <input class="input-lg" type="text" placeholder="Food Name" #newName><br>
      <input class="input-lg" type="text" placeholder="Details" #newDetails><br>
      <input class="input-lg" type="number" placeholder="Number of Calories" #newCalories><br>
      <button (click)="addNewMeal(newName, newDetails, newCalories)" type="enter-meal button" class="btn btn-lg btn-success">Enter a Meal</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addNewMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var newMeal = new Meal(newName.value, newDetails.value, parseInt(newCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
