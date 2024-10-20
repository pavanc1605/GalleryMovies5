import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://test.create.diagnal.com/data/page1.json")
      .then((response) => response.json())
      .then((data) => setMovies(data.page["content-items"].content));
  }, []);

  return (
    <div>
      <header className="header">Romantic Comedy</header>
      <div className="container">
        {movies.map((movie, index) => (
          <div key={index} className="card">
            <img
              src={`https://test.create.diagnal.com/images/${movie["poster-image"]}`}
              alt={movie.name}
            />
            <div className="card-title">{movie.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
