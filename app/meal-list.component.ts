import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { HealthyRatingPipe } from './calories.pipe';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [ HealthyRatingPipe ],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  templateUrl: 'app/meal-list.component.html'
})
export class MealListComponent {
  public mealList: Meal[] = [];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filter: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal): void {
    this.mealList.push(newMeal);
  }
  onChange(option) {
    this.filter = option;
    console.log(this.filter);
  }
  refreshMeal(newMeal: Meal) {
    for(var meal of this.mealList) {
      if(meal.name === newMeal.name) {
        meal.calories = newMeal.calories;
      }
    }
  }
}
