import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { SearchSubmitHandler, value, InputChangeHandler } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text text-capitalize">
                Search recipes with{" "}
                <strong className="text-danger">Food2Fork</strong>
              </h1>
              <form className="mt-4" onSubmit={SearchSubmitHandler}>
                <label htmlFor="search">Type Recipes Seperated By Comma</label>
                <div className="input-group">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Eg. Chicken,onions"
                    className="form-control"
                    value={value}
                    onChange={InputChangeHandler}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
