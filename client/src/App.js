import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Route
        path="/"
        render={props => (
          <SavedList {...props} list={savedList} key={props.match.params.id} />
        )}
      />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => <Movie {...props} addToList={addToSavedList} />}
      />
    </div>
  );
};

export default App;
