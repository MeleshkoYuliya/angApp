import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIe9IG-aqIGvz2_VIKJ54OOD5k6Ofu4uhOkw40NdZGlFmWPUPmOg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIe9IG-aqIGvz2_VIKJ54OOD5k6Ofu4uhOkw40NdZGlFmWPUPmOg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
