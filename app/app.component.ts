import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h4>
      {{currentMeal.name}}
    </h4>
  `
})
export class MealComponent {
  public meal: Meal;
}

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
  <h4 *ngFor="#currentMeal of mealList"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal">
  </h4>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}

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
      new Meal("Protein Shake", "Chocolate", 160, 0),
      new Meal("Tiger Thigh", "Endangered Species are the best", 550, 1),
      new Meal("Small Baby", "Imported from a 3rd world", 680, 2),
      new Meal("Puppy", "Kind of mangy", 550, 3),
      new Meal("Eagle", "Missing Hair", 290, 4)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number, public id: number) {

  }
}
