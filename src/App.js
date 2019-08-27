import React, {Component} from 'react';
import {Provider} from 'react-redux';

import { store } from './store/store'
import './App.css';
import MovieData from './components/MovieData';




class App extends Component {

   render() {
      return(
         <Provider store={store}>
         <div className="wrapper">
            <header className="App-header"></header>
            <MovieData/>
         </div>
         </Provider>

      )
   }
}

export default App;
