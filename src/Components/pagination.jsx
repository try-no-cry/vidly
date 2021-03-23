import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Pagination extends Component {
    
    render() { 
    const {moviesLen,pageSize, currentPage, onPageChange}=this.props;

    const pageCount=Math.ceil(moviesLen/pageSize);
    const pages=_.range(1,pageCount+1);
    if(pageCount===1) return null;

     
        return ( <nav aria-label="Page navigation">
        <ul className="pagination">

            {/* {pages.forEach(p=> <li onClick={} key={p} style={{cursor:"pointer"}} className="page-item"><a  className="page-link" >{p}</a></li>)} */}
             {pages.map(page=><li key={page} onClick={()=>onPageChange(page)} className={page===currentPage?"page-item active":"page-item"}><a  className="page-link" >{page}</a></li>)}
             
           
        </ul>

      </nav> );
    }

   
     
}

// Pagination.propTypes={
//   moviesLen:,pageSize, currentPage, onPageChange
// }
export default Pagination;