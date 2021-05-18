import React from 'react';
import Container from '@material-ui/core/Container';

import LandingPage from './Components/LandingPage/LandingPage';
import AboutMe from './Components/AboutMe/AboutMe';
import Games from './Components/Games/Games';
import Contact from './Components/Contact/Contact';

export default function App() {
    return (
        <Container maxWidth={false} style={{ margin: "0", padding: "0", overflowX: "hidden" }}>
            <LandingPage />
            <AboutMe />
            <Games />
            <Contact />
            {/* <SinglePageStepper />
            <Landing />
            <Portfolio />
            <Footer /> */}
        </Container>
    );
}
