import React, {Component} from 'react';
import {Provider} from 'react-redux';

import { store } from './store/store'

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import WelcomePage from './components/WeclomePage';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

class App extends Component {

   render() {
      return(
         <Provider store={store}>
         <div className="wrapper">

            <header className="header"><div>fsdfsdfsd</div></header>

            <div className="content">
            <Router>
               <Switch>
                  <Route path='/' exact component={WelcomePage}></Route>
                  <Route path='/:currentMovieType/:currentMoviePage' exact component={MovieList}/>
                  <Route path='/:currentMovieType/:currentMoviePage/:movieID' exact component={MovieDetail}/>
               </Switch>
            </Router>
            </div>


            <footer className="footer"><div>sdsfsdf</div></footer>


         </div>



         </Provider>

      )
   }
}

export default App;
