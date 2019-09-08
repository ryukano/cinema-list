import React, {Component} from 'react';
import {Provider} from 'react-redux';

import { store } from './store/store'
import './App.css';
import MovieData from './components/MovieData';
import Button from './components/Button';
import NavArrow from './components/NavArrow';
import CurrentPage from './components/CurrentPage';

class App extends Component {

   render() {
      return(
         <Provider store={store}>
         <div className="wrapper">

            <header className="header"></header>

            <div className="content">

               <div className="button-group">
                  <Button id='1' moviesType="now_playing" buttonName='Now Playing'></Button>
                  <Button id='2' moviesType="upcoming" buttonName='Upcoming'></Button>
                  <Button id='3'moviesType="popular" buttonName='Popular'></Button>
                  <Button id='4' moviesType="top_rated" buttonName='Top Rated'></Button>
               </div>

               <MovieData/>

               <div className="naw-arrows">
                  <NavArrow navArrowText="previus page" navDirection="previus"></NavArrow>
                  <CurrentPage/>
                  <NavArrow navArrowText="next page" navDirection="next"></NavArrow>
               </div>

            </div>

            <footer className="footer"></footer>

         </div>


         </Provider>

      )
   }
}

export default App;
