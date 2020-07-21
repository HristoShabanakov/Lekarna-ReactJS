import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import OfferPage from './components/offer';
import Header from './components/header';
import Footer from './components/footer';
const Navigation = () => {
return(
    <Fragment>
    <Header />
    <Router>
        <Route path="/" exact component={App}/>
        <Route path="/offers" component={OfferPage}/>
    </Router>
    <Footer></Footer>
    </Fragment>
)
}

export default Navigation;