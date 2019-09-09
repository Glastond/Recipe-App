import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./Components/Recipe List/RecipeList";
import RecipeDetails from "./Components/Recipe Details/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=22d8130abe20047f347fa419e2ddc19c",
    base_url:
      "https://www.food2fork.com/api/search?key=22d8130abe20047f347fa419e2ddc19c",
    details_id: 35380,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.recipes.length === 0) {
        this.setState({ error: "Sorry, There Are No Results For Your Query" });
      } else {
        this.setState({ recipes: jsonData.recipes });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  DisplayContent = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            DetailsClickHandler={this.DetailsClickHandler}
            value={this.state.search}
            InputChangeHandler={this.InputChangeHandler}
            SearchSubmitHandler={this.SearchSubmitHandler}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            clicked={this.IndexHandler}
          />
        );
    }
  };

  IndexHandler = index => {
    this.setState({ pageIndex: index });
  };

  DetailsClickHandler = (index, id) => {
    this.setState({ pageIndex: index, details_id: id });
  };

  InputChangeHandler = e => {
    this.setState({ search: e.target.value });
  };

  SearchSubmitHandler = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ""
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    // console.log(this.state.recipes);

    return (
      <React.Fragment>
        {this.DisplayContent(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
