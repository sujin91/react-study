import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../css/Movie.css'

function Movie(movies) {
    return (
        <Link to={
            {
                pathname: `/movie/${movies.id}`,
                state: movies
            }
        }>
            <div className="movie_item">
                <img src={movies.poster} alt={movies.title} title={movies.title}/>
                <div className="movie_info">
                    <strong className="movie_tit">{movies.title}</strong>
                    <em className="movie_year">{movies.year}</em>  
                    <ul className="movie_genres">
                        {movies.genres.map((genre, index) => (<li key={index} className="genre">{genre}</li>))}
                    </ul>
                    <p className="movie_summary">{movies.summary}</p>
                </div>
            </div>
        </Link>    
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