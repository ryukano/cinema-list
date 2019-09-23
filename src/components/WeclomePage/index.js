import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function WelcomePage(props) {
   return(
      <div className="welcome-page">
         <div className="welcome-info">
            <p>Here you can get up-to-date information about popular, new movies or movies that are being shown in cinema now.</p>
         </div>
         <div className="welcome-link-wrapper">
            <Link className="welcome-link" to={`/${props.currentMoviesType}/${props.currentPage}`}>
               <p>GO TO THE MOVIE LIST &#187;</p>
            </Link>
         </div>

      </div>
   )
}

let mapStateToProps = state => {
   return {
      currentMoviesType: state.currentMoviesTypeReducer.currentMoviesType,
      currentPage: state.currentMoviesPageReducer.currentPage
   }
};

export default connect(mapStateToProps, null)(WelcomePage);
