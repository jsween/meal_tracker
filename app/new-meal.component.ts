import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['newMeal'],
  template: `
    <h4>Blank Template</h4>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addNewMeal() {
    console.log("creating food...");
  }
}
