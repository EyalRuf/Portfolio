import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { Slide } from '@material-ui/core';

import './Landing.css'

class Landing extends React.Component<{}, {slideImg: boolean}> {
    state = {
        slideImg: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({ slideImg: true }), 1000)
    }

    render() {
        return (
            <header className="header">
                <div className="header-text">
                    <Typography variant="h1" color="primary" className="name-text"> EYAL RUFEISEN </Typography>
                    <div className="header-my-descirption">
                        <Typography variant="h3" color="textPrimary"> Coder, Game Designer & Developer </Typography>
                        <Typography variant="h5" color="textSecondary">
                            <p> After years of being a web developer for the IDF I have turned my attention to my biggest passion. Games. </p>
                            <p> I have been a gamer all my life and I have a burning desire to learn about them and make them. </p>
                            <p> I work hard so people can the way I felt when playing my favorite games. </p>
                        </Typography>
                    </div>
                </div>
                {/* <Slide in={this.state.slideImg} direction="right"> */}
                {/* </Slide> */}
                <img className="me" src="/rsz_my_outline.png"/>
            </header>
        );
    }
}

export default Landing;