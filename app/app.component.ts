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
    this.meals = [];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);

  }
}
