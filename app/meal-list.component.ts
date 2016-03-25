import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
// import { MealShowDetailsComponent } from './meal-show-details.component';
import { HealthyRatingPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [ HealthyRatingPipe ],
  directives: [MealComponent, NewMealComponent],
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
}
