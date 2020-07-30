import { ShoppingListRouter } from "./shopping-list-router.module";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [FormsModule, SharedModule, RouterModule, ShoppingListRouter],
  // providers: [LoggingService],
})
export class ShoppingListModule {}
