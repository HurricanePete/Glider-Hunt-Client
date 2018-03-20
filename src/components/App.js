import React from 'react';

import Nav from './nav';
import Hero from './hero';
import BrowseBy from './browseBy';
import Featured from './featured';
import Footer from './footer';

// import TopShot from'./static-photos/top-shot.jpeg';

import './styles/App.css'; 
import './styles/response-grid.css';

// <div>
//   <img src={TopShot} alt="Top Shot" />
// </div>

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