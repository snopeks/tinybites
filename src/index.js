import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import EasyMeals from './pages/EasyMeals';
import Resources from './pages/Resources';
import Nutrients from './pages/Nutrients';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div className="App">
            <Header/>
            <Route exact path="/" component={App}/>
            <Route path="/nutrients" component={Nutrients}/>
            <Route path="/about" component={About}/>
            <Route path="/resources" component={Resources}/>
            <Route path="/easymeals" component={EasyMeals}/>
            <footer>
              <p>Website by <a href="https://www.snowgillconsulting.com">Snowgill Consulting</a></p>
              <p>Design consultation by <a href="https://megansnopek.com/copy-of-contact">Megan Snopek</a></p>
              <p>Tiny Bites, &copy; 2020</p>
            </footer>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
