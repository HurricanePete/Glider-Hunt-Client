import React from 'react';

import Nav from './nav';
import Hero from './hero';
import BrowseBy from './browseBy';
import Featured from './featured';
import Footer from './footer';

import './styles/App.css'; 
import './styles/response-grid.css';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                <main className="">
                  <Hero />
                  <BrowseBy />
                  <div className="parallax-glider"></div>
                  <Featured />
                </main>
                <Footer />
            </div>
        )
    }
}