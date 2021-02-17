import React, {Component} from 'react';
import { getMovies,deleteMovie, getMovie } from '../services/fakeMovieService.js';
import Like from './like.jsx';

class Movie extends Component {
    
    state = 
    {
       movie:getMovies()
        
    }

     
    render() { 

         

        const {length}=this.state.movie;
        if(length==0)
           return <p>No Movies Listed!!</p>;
           
        return ( 
            <React.Fragment>
                <p>Total <span className="badge">{length}</span> movies are listed</p>
                
                <table className="table">
                    <thead>
                        <tr>
                         
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Daily Rental rate</th>
                        <th className="col">Loved it?</th>
                        <th scope="col">Action</th>
                       
                        </tr>
                    </thead>

                    <tbody>

                         
                            
                            { this.state.movie.map(
                                mo=> (
                                      
                                    <tr>
                                        <td>{mo.title}</td>
                                        <td>{mo.genre.name}</td>
                                        <td>{mo.numberInStock}</td>
                                        <td>{mo.dailyRentalRate}</td>
                                        <td><Like onToggleClick={()=>this.handleToggleLike(mo._id)} liked={mo.liked}/></td>
                                        <td><button key={mo._id} className="btn btn-danger btn-sm" onClick={()=>this.delThisMovie(mo._id)}>Delete</button></td>
                                    </tr>
                                    
                            )
                            )}
                           
                        
                     
                          
                    </tbody>
                </table>
            </React.Fragment>
         );
    }

    handleToggleLike=(m_id)=>
    {
        const movie=getMovie(m_id);
        const movies=[...this.state.movie];
        const index=movies.indexOf(movie);
        movies[index]={...movies[index]};
        movies[index].liked=!movies[index].liked;
         
        this.setState({movie:movies});
        
        console.log();
    }

    delThisMovie=(id)=>
    {
        deleteMovie(id);
        const mv=this.state.movie.filter(m=>m._id!=id);
        this.setState({movie:mv}); 
    }

}
 
export default Movie;