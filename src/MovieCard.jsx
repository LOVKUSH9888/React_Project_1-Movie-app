import React from 'react';

// A functional component that renders a movie card
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  // Using destructuring assignment to extract the properties from the movie object
  return (
    // Wrapping the content in a div with className "movie" and using imdbID as the key
    <div className="movie" key={imdbID}>
      <div>
        {/* Displaying the year of the movie */}
        <p>{Year}</p>
      </div>

      <div>
        {/* Displaying the poster image of the movie, using a placeholder image if Poster is "N/A" */}
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        {/* Displaying the type of the movie */}
        <span>{Type}</span>
        {/* Displaying the title of the movie */}
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

// Exporting the component for use in other parts of the application
export default MovieCard;
