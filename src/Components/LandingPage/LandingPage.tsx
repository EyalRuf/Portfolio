import React from 'react';
import '../../index.css';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div id="Landing" className="site-page">
            <div className="container">
                <div className="content land-page-content">
                    <div className="links-and-logo">
                        <img src="/NamePaper.png" className="logo" />
                        <div className="links">
                            <div className="link link1"><a href="#Landing"><span className="asterisk">*</span> <span className="link-text">Home</span></a></div>
                            <div className="link link2"><a href="#AboutMe"><span className="asterisk">*</span> <span className="link-text">About me</span></a></div>
                            <div className="link link3"><a href="#Games"><span className="asterisk">*</span> <span className="link-text">Games</span></a></div>
                            <div className="link link4"><a href="#Contact"><span className="asterisk">*</span> <span className="link-text">Contact</span></a></div>
                        </div>
                    </div>
                    <div className="my-img-container">
                        <img src="/mypiclanding.png" className="my-pic" />
                    </div>
                </div>
                <div className="bg-words"></div>
            </div>
            <div className="background-stripe">
            </div>
            <div className="background-stripe background-stripe2">
            </div>
        </div>
    );
}