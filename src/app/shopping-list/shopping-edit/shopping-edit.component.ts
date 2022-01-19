import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements  AfterViewInit

 {

  @ViewChild('nameInputRef', {static: false}) nameInputRef!: ElementRef;
  @ViewChild('amountInputRef', {static: false}) amountInputRef!: ElementRef;

  constructor(private slService: ShoppingListService) {

  }

  // ngOnInit() {

  // }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }


  onAddItem(){

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);

    this.slService.addIngredient(newIngredient);
  }


}
