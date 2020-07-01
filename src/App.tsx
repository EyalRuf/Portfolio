import React from 'react';
import Container from '@material-ui/core/Container';
import SinglePageStepper from './Components/SinglePageStepper/SinglePageStepper';
import Landing from './Components/Landing/Landing';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

export default function App() {
    return (
        <Container maxWidth={false} style={{margin: "0", padding: "0"}}>
            <SinglePageStepper />
            <Landing />
            <Portfolio />
            <Footer />
        </Container>
    );
}
