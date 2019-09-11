import React, {Component} from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import { buttonsConfig } from './buttonsConfig';

class MoviesTypeButtons extends Component {

   render() {

      return (
         <div className="button-group">
            {buttonsConfig.map((config, index) =>
               <Button  className={this.props.currentMoviesType !== config.moviesType ? "my-button" : "b-selected"}
                        key={index}
                        {...config}
               />
            )}
         </div>
      )
   }
}

let mapStateToProps = state => {
   return {
      currentMoviesType: state.currentMoviesTypeReducer.currentMoviesType
   }
}

export default connect(mapStateToProps, null)(MoviesTypeButtons);
