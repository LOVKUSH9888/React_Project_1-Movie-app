import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// API key for OMDb API
const API_KEY = "5b0f3c9f";

// URL for fetching movie data
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

// Main component
const App = () => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // State for movie data
  const [movies, setMovies] = useState([]);

  // useEffect hook to perform an initial search for "Batman"
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  // Function to search for movies by title
  const searchMovies = async (title) => {
    // Fetch movie data from the API
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // Set the movie data in state
    setMovies(data.Search);
  };

  return (
    <div className="app">
      {/* Page header */}
      <h1>Love-Movies</h1>

      {/* Search bar */}
      <div className="search">
        {/* Input field for search term */}
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />

        {/* Search icon to trigger search */}
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Display movie data */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
