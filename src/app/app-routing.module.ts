import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  PreloadingStrategy,
} from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    loadChildren: "./recipes/recipes.module#RecipesModule",
  },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule",
  },
  {
    path: "auth",
    loadChildren: "./auth/auth.module#AuthModule",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules, // load all modules while the user visits the page first and thereafter these modules can be injected as the user visits other pages // faster at the beginning // faster at the page visit
    }), // be aware of the preloading strategy
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
