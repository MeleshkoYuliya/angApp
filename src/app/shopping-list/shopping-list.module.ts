import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [CommonModule, FormsModule],
  //   exports: [FormsModule],
})
export class ShoppingListModule {}
