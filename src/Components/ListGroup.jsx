import React, { Component } from 'react'

class ListGroup extends Component {
    state = {  }
    render() { 
        const {genres,currentGenre, onGenreClicked} =this.props;

        return ( <React.Fragment>
           <ul className="list-group">
               {genres.map(genre=><li key={genre} onClick={()=>onGenreClicked(genre)} className={genres[currentGenre]==genre?"list-group-item active":"list-group-item"}>{genre}</li>)}
               
           </ul>
        </React.Fragment>  );
    }
}
 
export default ListGroup;