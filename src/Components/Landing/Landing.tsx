import React from 'react';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// import { Slide } from '@material-ui/core';
import './Landing.css'

class Landing extends React.Component<{}, {}> {
    render() {
        return (
            <header className="header">
                <Typography variant="h5" color="textSecondary">
                    <p className="text-bg pos"> Hello World! Can&apos;t Wait to Share My Ideas With You </p>
                </Typography>
                <div className="header-text">
                    <Typography variant="h1" color="primary" className="name-text"> EYAL RUFEISEN </Typography>
                        <Typography variant="h4" color="textPrimary">
                            <span> Coder, Game Designer/Developer </span>
                        </Typography>
                        {/* <Typography variant="h5" color="textSecondary">
                            <p> &#8226; Years of Programming Experience </p>
                            <p> &#8226; Design Thinking </p>
                            <p> &#8226; Burning Desire to Make Games</p>
                            <p> <span className="tag">Passion</span> <span className="tag">Hard Work</span> <span className="tag">Innovation</span> </p>
                        </Typography> */}
                </div>
                {/* <img className="me" src="/rsz_my_outline.png"/> */}
            </header>
        );
    }
}

export default Landing;