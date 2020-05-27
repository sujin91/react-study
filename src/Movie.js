import React from 'react';
import PropTypes from 'prop-types'
import './css/Movie.css'

function Movie(movies) {
    return (
        <div className="movie_item">
            <img src={movies.poster} alt={movies.title} title={movies.title}/>
            <div className="movie_info">
                <strong className="movie_tit">{movies.title}</strong>
                <em className="movie_year">{movies.year}</em>  
                <ul className="movie_genres">
                    {movies.genres.map(genre => (<li className="genre">{genre}</li>))}
                </ul>
                <p className="movie_summary">{movies.summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie