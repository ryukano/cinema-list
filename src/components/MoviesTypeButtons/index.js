import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../Button';
import { buttonsConfig } from './buttonsConfig';

class MoviesTypeButtons extends Component {

   render() {

      return (
         <div className="button-group">
            {buttonsConfig.map((config, index) =>
            <div key={index}>
                  <Button  className={this.props.currentMoviesType !== config.moviesType ? "my-button" : "b-selected"}
                     {...config}
                  />
                  <Redirect to={`/${this.props.currentMoviesType}/${this.props.currentPage}`}/>
            </div>

            )}
         </div>
      )
   }
}

let mapStateToProps = state => {
   return {
      currentMoviesType: state.currentMoviesTypeReducer.currentMoviesType,
      currentPage: state.currentMoviesPageReducer.currentPage
   }
}

export default connect(mapStateToProps, null)(MoviesTypeButtons);
