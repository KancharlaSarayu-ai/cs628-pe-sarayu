import React, { useState } from 'react';

const MovieList = () => {
    
    const movies = [
        { title: 'OG', genre: 'Action', releaseYear: 'yet to be released' },
        { title: 'Kushi', genre: 'Romantic', releaseYear: 2000 },
        { title: 'RRR', genre: 'Adventure', releaseYear: 2023 },
    ];

 // using this to manage the genres
    const [selectedGenre, setSelectedGenre] = useState('All Genres');

    // Filtered movies based on selected genre
    const filteredMovies = selectedGenre === 'All Genres'
        ? movies
        : movies.filter(movie => movie.genre === selectedGenre);

    //  Generating genres 
    const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

    
    const handleMovieClick = (title) => {
        alert(`You clicked on "${title}"`);
    };

    return (
        <div style={{ margin: '20px' }}>
            <h1>Movie List</h1>
            <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>

            <div style={{ marginTop: '20px' }}>
                {filteredMovies.map((movie, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            marginBottom: '10px',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleMovieClick(movie.title)}
                    >
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <p>Released: {movie.releaseYear}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
