import { hexToRgb } from '@material-ui/core';
import { NavigateBeforeSharp } from '@material-ui/icons';
import React from 'react';
import '../../index.css';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div id="AboutMe" className="site-page">
            <div className="container">
                <div className="content about-me-content grid-container">
                    <div className="about-me-text">
                        About Me
                        <div className="acv">
                            <span className="click-for-cv">
                                {
                                    " CV -> "
                                }
                                &nbsp;
                            </span>
                            <a href="Eyal_CV.pdf" rel="noopener noreferrer" target="_blank" className="acv">
                                <img src="/cvicon.png" className="cv2" />
                            </a>
                        </div>
                    </div>
                    <img src="aboutme.png" className="about-pic about-me"/>
                    <img src="coding.png" className="about-pic coding"/>
                    <img src="design.png" className="about-pic design"/>
                </div>
            </div>
        </div>
    );
}