import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';
import { HealthyRatingPipe } from './calories.pipe';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class= "center">
    <h1>Fatboy LoseIt App</h1>
  </div>
    <div class="container">
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
      new Meal("Protein Shake", "Chocolate", 160),
      new Meal("Tiger Thigh", "Endangered Species are the best", 550),
      new Meal("Small Baby", "Imported from a 3rd world", 680),
      new Meal("Puppy", "Kind of mangy", 550),
      new Meal("Eagle", "Missing Hair", 290)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);

  }
}
