import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';
import { HealthyRatingPipe } from './calories.pipe';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class= "jumbotron center">
    <h1>Fatboy LoseIt App</h1>
  </div>
    <div class="container content">
      <h2>Your Meals</h2>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Meal1", "Details1 Healthy", 299),
      new Meal("Meal2", "Details2 Healthy", 300),
      new Meal("Meal3", "Details3 Healthy", 200),
      new Meal("Meal4", "Details4 Unhealthy", 500),
      new Meal("Meal5", "Details5 Unhealthy", 456),
      new Meal("Meal6", "Details6 Unhealthy", 800)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);

  }
}
