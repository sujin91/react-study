import React from 'react';
import axios from 'axios'
import Movie from '../component/Movie'
import '../css/Home.css'

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const axiosMovies = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')

    const {
      data: {
        data: { movies }
      }
    } = axiosMovies
    
    console.log(movies)
    this.setState({movies, isLoading: false})
  }

  componentDidMount = () => {
    this.getMovies(this.state.movies)
  }

  render() {
    const {
      isLoading,
      movies
    } = this.state

    return (
      <section className="container">
        {isLoading 
          ? (<span className="loader">Loading...</span>)
          : (<div className="movie">
            {
            movies.map(movie => (
             <Movie key={movie.id} id={movie.id} year={movie.year} genres={movie.genres} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
            ))
            }
          </div>)
        }
      </section>
    );
  }
}
export default Home;
