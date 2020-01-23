import About from './About.react';
import CallToAction from './CallToAction.react';
import Contact from './Contact.react';
import Footer from './Footer.react';
import Masthead from './Masthead.react';
import Navigation from './Navigation.react';
import Portfolio from './Portfolio.react';
import React from 'react';
import Services from './Services.react';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Masthead />
            <About />
            <Services />
            <Portfolio />
            <CallToAction />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
