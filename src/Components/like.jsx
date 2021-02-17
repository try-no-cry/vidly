import React, { Component } from 'react'

class Like extends Component {
    state = {   }
    render() { 
        return ( 
            <React.Fragment>
                <i onClick={this.props.onToggleClick} className={this.getHeart()} aria-hidden="true"></i>

            </React.Fragment>
         );
    }

    getHeart()
    {
        let cls="fa fa-heart";
        if(!this.props.liked)
           cls +="-o";

        return cls;   
    }
}
 
export default Like;