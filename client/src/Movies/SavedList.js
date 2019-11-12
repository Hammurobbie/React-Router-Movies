import React from "react";

const SavedList = props => {
  console.log(props);
  const routeToHome = () => {
    props.history.push("/");
  };
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={routeToHome} className="home-button">
        Home
      </div>
    </div>
  );
};

export default SavedList;
