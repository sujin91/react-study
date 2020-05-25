import React from 'react';
import PropTypes from 'prop-types'
import './css/Movie.css'

function Movie(movies) {
    return (
        <div class="movies_item">
            <div class="movies_thumb">
                <img src={movies.poster} alt={movies.title} title={movies.title}/>
            </div>
            <div class="movies_info">
                <strong class="movies_tit">{movies.title}</strong>
                <em class="movie_year">{movies.year}</em>  
                <p class="movie_summary">{movies.summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
export default Movie