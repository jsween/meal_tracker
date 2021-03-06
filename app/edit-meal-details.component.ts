import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>{{ meal.name }}</h3>
    <h4>{{ meal.details }}</h4>
    <h4>{{ meal.calories }} calories</h4>
    <hr>
    <h5>Edit This Meal:</h5>
    <input value="{{meal.name}}" type="text" class="col-sm-10 input-lg" placeholder="Meal Name" #editName/><br>
    <input value="{{meal.details}}" type="text" class="col-sm-10 input-lg" #editDetails/>
    <input value="{{meal.calories}}" type="number" class="col-sm-3 input-lg" #editCalories/>
    <button (click)="editMeal(editName, editDetails, editCalories)" class="btn-lg btn-success add-button">Edit Meal</button>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public onEditMeal: EventEmitter<Meal>
  constructor(){
    this.onEditMeal = new EventEmitter;
  }
  editMeal(editName: HTMLInputElement, editDetails: HTMLInputElement, editCalories: HTMLInputElement) {
    this.meal.name = editName.value;
    this.meal.details = editDetails.value;
    this.meal.calories = editCalories.valueAsNumber;
    this.onEditMeal.emit(this.meal);
  }
}
