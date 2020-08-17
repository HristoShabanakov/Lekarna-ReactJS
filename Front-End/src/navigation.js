import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import OfferPage from './pages/offer';
import Header from './components/header';
import Footer from './components/footer';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import PharmacyPage from './pages/pharmacies';
import ErrorPage from './pages/error';
import LogoutPage from './pages/logout';

const Navigation = () => {
return (
    <Fragment>
    <Router>
    <Header />
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/offers" component={OfferPage}/>
        <Route path="/pharmacies" component={PharmacyPage}/>
        <Route path="/register" component ={RegisterPage}/>
        <Route path="/login" component ={LoginPage}/>
        <Route path="/logout" component ={LogoutPage}/>
        <Route component ={ErrorPage}/>
        </Switch>
    </Router>
    <Footer/>
    </Fragment>
)
}

export default Navigation;