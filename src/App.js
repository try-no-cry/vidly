import { Component } from 'react';
import './App.css';
import Movie from './Components/movie';
import Pagination from './Components/pagination'
import { getMovies,deleteMovie, getMovie } from './services/fakeMovieService';
import ListGroup from './Components/ListGroup'


class App extends Component {
  state = { 
   
  movies:getMovies(),
  genres:["All Genres","Action","Comedy","Thriller"],
  currentGenre:0
  
  }

  handleToggleLike=(m_id)=>
  {
      const movie=getMovie(m_id);
     
      const movies=[...this.state.movies];
     
      const index=movies.indexOf(movie);
      // movies[index].liked;
      
      movies[index].liked=!movies[index].liked;
       
      this.setState({movies});
      
       
  }

  delThisMovie=(id)=>
  {
      deleteMovie(id);
      const mv=this.state.movies.filter(m=>m._id!=id);
      this.setState({movies:mv}); 
  }

  handleGenreClicked=(genre)=>
  {
     const index=this.state.genres.indexOf(genre);
     this.setState({currentGenre:index});
    //  console.log(this.state.genres[index]);
  }

  render() { 
    const len=this.state.movies.length;
 
    return (   
      
    <main className="container">
      
      <div className="row">
        <div className="col-3 mt-5">
          <ListGroup onGenreClicked={this.handleGenreClicked} genres={this.state.genres} currentGenre={this.state.currentGenre}/>
        </div>
        <div className="col-9">
            <Movie currentGenre={this.state.currentGenre} genres={this.state.genres} movies={this.state.movies} onToggleLike={this.handleToggleLike} onDeleteMovieClicked={this.delThisMovie}/>
           
        </div>
      </div>
       
    </main>   );
  }

  
 

}
 
export default App;
 
