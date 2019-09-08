import React, {Component} from 'react';
import { connect } from 'react-redux';

class CurrentPage extends Component {

   render() {
      const currentPage = this.props.currentPage;
      return (
         <div className="current-page">{currentPage}</div>
      )
   }
}

let mapStateToProps = state => {
   return {
      currentPage: state.currentMoviesPageReducer.currentPage
   }
};

export default connect(mapStateToProps, null)(CurrentPage);
