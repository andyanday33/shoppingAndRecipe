import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput!: ElementRef<HTMLInputElement>;

  @Output() formSubmit: EventEmitter<Ingredient>;

  constructor() {
    this.formSubmit = new EventEmitter();
  }

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;

    if (name && amount)
      this.formSubmit.emit({
        name,
        amount,
      });
  }
}
