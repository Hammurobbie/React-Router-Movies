import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => {
  const routeToHome = () => {
    props.history.push("/");
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink exact to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <div onClick={routeToHome} className="home-button">
        Home
      </div>
    </div>
  );
};

export default SavedList;
