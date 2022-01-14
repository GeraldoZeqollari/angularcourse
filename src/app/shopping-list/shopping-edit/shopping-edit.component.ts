import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInputRef', {static: false})  nameInputRef!: ElementRef;
  @ViewChild('amountInputRef' , {static: false}) amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {

  }

  ngOnInit(): void {
    // this.nameInputRef.changes.subscribe((changes: any) => console.log(changes));
    // this.amountInputRef.changes.subscribe((changes: any) => console.log(changes));
  }


  onAddItem(){

    const ingName = this.nameInputRef.nativeElement.value.;
    const ingAmount = this.amountInputRef.nativeElement.value.;
    const newIngredient = new Ingredient(ingName,ingAmount);

    this.ingredientAdded.emit(newIngredient);
  }



}
