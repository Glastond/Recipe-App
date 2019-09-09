import React, { Component, Fragment } from "react";

export default class Recipe extends Component {
  render() {
    const {
      recipe_id,
      image_url,
      title,
      publisher,
      source_url
    } = this.props.recipe;

    const { DetailsClickHandler } = this.props;

    return (
      <Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              className="img-card-top"
              style={{ height: "14rem" }}
              alt="Recipe"
            />
            <div className="text-capitalize card-body">
              <h6>{title}</h6>
              <h6 className="text-warning text">provided by {publisher}</h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary text-capitalize"
                onClick={DetailsClickHandler}
              >
                Details
              </button>
              <a
                href={source_url}
                className="btn btn-success mx-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe url
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
