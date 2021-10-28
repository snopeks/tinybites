import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Resources from './pages/Resources';
import Nutrition from './pages/Nutrition';
import Safety from './pages/Safety';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';

let today = new Date(); 

const routing = (
    <Router>
        <div className="App">
            <Header/>
            <Route exact path="/" component={App}/>
            <Route path="/nutrition" component={Nutrition}/>
            <Route path="/about" component={About}/>
            <Route path="/resources" component={Resources}/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/safety" component={Safety}/>
            <footer>
              <p>Website by <a href="https://www.snowgillconsulting.com">Snowgill Consulting</a></p>
              <p>Design by <a href="https://megansnopek.com/copy-of-contact">Megan Snopek</a></p>
              <p>Tiny Bites, &copy; {today.getFullYear()}</p>
            </footer>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
