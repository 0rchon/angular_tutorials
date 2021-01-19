var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/recipes","pathMatch":"full"},{"path":"recipes","loadChildren":"./recipes/recipes.module#RecipesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/recipes/recipes-routing.module.ts","module":"RecipesRoutingModule","children":[{"path":"","component":"RecipesComponent","canActivate":["AuthGuard"],"children":[{"path":"","component":"RecipeStartComponent"},{"path":"new","component":"RecipeEditComponent"},{"path":":id","component":"RecipeDetailComponent","resolve":["RecipesResolverService"]},{"path":":id/edit","component":"RecipeEditComponent","resolve":["RecipesResolverService"]}]}],"kind":"module"}],"module":"RecipesModule"}]},{"path":"shopping-list","loadChildren":"./shopping-list/shopping-list.module#ShoppingListModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/shopping-list/shopping-list-routing.module.ts","module":"ShoppingListRoutingModule","children":[{"path":"","component":"ShoppingListComponent"}],"kind":"module"}],"module":"ShoppingListModule"}]},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[],"module":"AuthModule"}]}],"kind":"module"}]}