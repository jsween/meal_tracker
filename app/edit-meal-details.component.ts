import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h4>{{ meal.name }}</h4>
    <h5>Edit Calories: {{ meal.calories }}</h5>
    <input type="number" value="{{meal.calories}}" class="col-sm-2 input-lg" #editCalories/>
    <button (click)="editMeal(editCalories)" class="btn-lg btn success add-button">Edit</button>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public onEditMeal: EventEmitter<Meal>
  constructor(){
    this.onEditMeal = new EventEmitter;
  }
  editMeal(editCalories: HTMLInputElement) {
    this.meal.calories = editCalories.valueAsNumber;
    this.onEditMeal.emit(this.meal);
  }
}
