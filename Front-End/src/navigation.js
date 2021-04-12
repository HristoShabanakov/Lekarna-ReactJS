import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import StockPage from './pages/stock';
import Header from './components/header';
import Footer from './components/footer';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import PharmacyPage from './pages/pharmacies';
import ErrorPage from './pages/error';
import Main from './components/main';

const Navigation = () => {
return (
    <Fragment>
    <Router>
    <Header />
    <Main>
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/stock" component={StockPage}/>
        <Route path="/pharmacy" component={PharmacyPage}/>
        <Route path="/register" component ={RegisterPage}/>
        <Route path="/login" component ={LoginPage}/>
        <Route component ={ErrorPage}/>
        </Switch>
    </Main>
    </Router>
    <Footer/>
    </Fragment>
)
}

export default Navigation;