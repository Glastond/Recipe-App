import React, { Component } from "react";
import Recipe from "../Recipe/Recipe";
import RecipeSearch from "../Recipe Search/RecipeSearch";

export default class RecipeList extends Component {
  render() {
    //   Destructuring
    const {
      recipes,
      DetailsClickHandler,
      value,
      InputChangeHandler,
      SearchSubmitHandler,
      error
    } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          InputChangeHandler={InputChangeHandler}
          SearchSubmitHandler={SearchSubmitHandler}
        />
        <div className="container my-5">
          {/* Title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text">Recipe List</h1>
            </div>
          </div>
          {/* End Of Title */}

          <div className="row">
            {error ? (
              <h1 className="text-danger text-center">{error}</h1>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    DetailsClickHandler={() =>
                      DetailsClickHandler(0, recipe.recipe_id)
                    }
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
