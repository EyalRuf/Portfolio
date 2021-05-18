import React from 'react';
import Container from '@material-ui/core/Container';

import LandingPage from './Components/LandingPage/LandingPage';
import AboutMe from './Components/AboutMe/AboutMe';
import Games from './Components/Games/Games';
import Contact from './Components/Contact/Contact';
import { ThreeSixty } from '@material-ui/icons';

export default class App extends React.Component<{}, { screensAmount: number }> {
    state = {
        screensAmount: 1
    };

    componentDidMount() {
        window.addEventListener("resize", this.scaleScreen.bind(this));
        setTimeout(this.scaleScreen.bind(this), 200);
    }

    scaleScreen() {
        const landing = document.getElementById("Landing");
        const aboutme = document.getElementById("AboutMe");
        const games = document.getElementById("Games");
        const contact = document.getElementById("Contact");

        if (landing != null && aboutme != null && games != null && contact != null) {
            const height = landing.offsetHeight + aboutme.offsetHeight + games.offsetHeight + contact.offsetHeight;
            console.log(height + " / " + window.innerHeight + " = " + height / window.innerHeight);
            this.setState({ screensAmount: (height / window.innerHeight) - 1});
        }
    }

    createBGWords() {
        const jsxArr = [];

        for (let i = 0; i < this.state.screensAmount; i++) {
            jsxArr.push(<div key={ "bgwords" + i + 1 } className="bg-words"></div>);
        }

        return jsxArr;
    }

    createStripes() {
        const jsxArr = [];

        for (let i = 0; i < this.state.screensAmount; i++) {
            jsxArr.push(<div key={"bgstripe" + i + 1} className="background-stripe"></div>);
            jsxArr.push(<div key={"bgstripe" + i + 2} className="background-stripe"></div>);
        }

        jsxArr.push(<div key={"bgstripelast"} className="background-stripe"></div>);


        return jsxArr;
    }

    render() {
        
        return (
            <Container id="container" maxWidth={false} style={{ margin: "0", padding: "0", overflowX: "hidden" }}>
                <LandingPage />
                <AboutMe />
                <Games />
                <Contact />
                
                <div className="repeat">
                    {
                        this.createBGWords()
                    }
                </div>

                <div className="repeat">
                    {
                        this.createStripes()
                    }
                </div>
                <div className="end">
                    Congrats! You have reached the end of the game =D
                </div>
                <div className="end">
                    <div>
                        To see how I made it, click <a rel="noopener noreferrer" href="https://github.com/EyalRuf/Portfolio" target="_blank">here</a>
                    </div>
                    <div>
                        To restart click <a href="#Landing">here</a>
                    </div>
                </div>
            </Container>
        );
    }
}
