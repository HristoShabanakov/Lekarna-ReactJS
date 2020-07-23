import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import OfferPage from './components/offer';
import Header from './components/header';
import Footer from './components/footer';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';

const Navigation = () => {
return(
    <Fragment>
    <Header />
    <Router>
        <Route path="/" exact component={App}/>
        <Route path="/offers" component={OfferPage}/>
        <Route path="/register" component = {RegisterPage}/>
        <Route path="/login" component = {LoginPage}/>
    </Router>
    <Footer/>
    </Fragment>
)
}

export default Navigation;