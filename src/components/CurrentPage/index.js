import React, {Component} from 'react';
import { connect } from 'react-redux';

class CurrentPage extends Component {

   render() {

      return (
         <div className="current-page">{this.props.currentPage}</div>
      )

   }
}

let mapStateToProps = state => {
   return {
      currentPage: state.currentMoviesPageReducer.currentPage
   }
};

export default connect(mapStateToProps, null)(CurrentPage);
