import React, {Component} from 'react';
import Like from './like.jsx';
import Pagination from './pagination.jsx';
import {paginate} from '../utils/paginate';

class Movie extends Component {
    
     state={
         pageSize:4,
         currentPage:1
     }
     
    render() { 
        const { onToggleLike, onDeleteMovieClicked, currentGenre,genres}=this.props;
        let {movies}=this.props;

        if(currentGenre!=0)
        {
            movies=movies.filter(movie=>movie.genre.name==genres[currentGenre]);
            // console.log(movies);
        }

        const moviesOnThePage=paginate(movies,this.state.currentPage,this.state.pageSize);
        // console.log(moviesOnThePage);
        const length=movies.length;
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
                        <th scope="col">Rate</th>
                        <th scope="col">Like</th> 
                        <th scope="col">Action</th>
                       
                        </tr>
                    </thead>

                    <tbody>

                         
                            
                            { moviesOnThePage.map(
                                mo=> (
                                      
                                    <tr>
                                        <td>{mo.title}</td>
                                        <td>{mo.genre.name}</td>
                                        <td>{mo.numberInStock}</td>
                                        <td>{mo.dailyRentalRate}</td>
                                        <td><Like key={mo._id} onToggleClick={()=>onToggleLike(mo._id)} liked={mo.liked}/></td>
                                        <td><button key={mo._id} className="btn btn-danger btn-sm" onClick={()=>onDeleteMovieClicked(mo._id)}>Delete</button></td>
                                    </tr>
                                    
                            )
                            )}
                           
                        
                     
                          
                    </tbody>
                </table>
                <Pagination getCurrentPageClass={this.handleCurrentPageClass} moviesLen={length} currentPage={this.state.currentPage} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>

            </React.Fragment>
         );
    }

handlePageChange=(page)=>
{
    
   if(page===this.state.pageSize) return null;

   this.setState({currentPage:page});

}

    
}
 
export default Movie;