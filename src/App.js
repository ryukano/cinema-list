import React, {Component} from 'react';
import {Provider} from 'react-redux';

import { store } from './store/store'
import './App.css';
import MovieData from './components/MovieData';
import Button from './components/Button'




class App extends Component {

   render() {
      return(
         <Provider store={store}>
         <div className="wrapper">
            <header className="header"></header>
               <div className="button-group">
                  <Button id='1' type="now_playing" buttonName='Now Playing'></Button>
                  <Button id='2' type="upcoming" buttonName='Upcoming'></Button>
                  <Button id='3'type="popular" buttonName='Popular'></Button>
                  <Button id='4' type="top_rated" buttonName='Top Rated'></Button>
               </div>

            <MovieData/>
         </div>
         </Provider>

      )
   }
}

export default App;
