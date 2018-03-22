import React from 'react';

import Nav from './nav';
import Hero from './hero';
import BrowseBy from './browseBy';
import EmailForm from './emailForm';
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
                  <section className="db">
                    <div className="parallax-glider">
                      <div className="darken">
                        <EmailForm />
                      </div>
                    </div>
                  </section>
                </main>
                <Footer />
            </div>
        )
    }
}