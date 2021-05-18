import React from 'react';
import '../../index.css';
import './Contact.css';

export default function Contact() {
    return (
        <div id="Contact" className="site-page">
            <div className="container">
                <div className="content contact-content">
                    <div className="contact-content-item contact-text">
                        Contact me
                    </div>
                    <div className="contact-content-item contact-stuff">
                        <div className="the-div">
                            <img src="gg.png" className="big-img"/>
                        </div>
                        <div className="sticky">
                            <div className="big-img contact-icons">
                                <a href="https://www.linkedin.com/in/eyal-rufeisen-a5a40517a/" rel="noopener noreferrer" target="_blank" className="contact-icon linkedin"><img src="linkedin.png"  className="contact-icon"/></a>
                                <a href="https://www.facebook.com/eyalruf/" rel="noopener noreferrer" target="_blank" className="contact-icon facebook"><img src="facebook.png"  className="contact-icon"/></a>
                                <a href="mailto:eyalrufeisen@gmail.com" rel="noopener noreferrer" target="_blank" className="contact-icon email"><img src="gmail.png"  className="contact-icon"/></a>
                                <a href="https://eyalruf.itch.io/" rel="noopener noreferrer" target="_blank" className="contact-icon itch"><img src="itch.png"  className="contact-icon"/></a>
                                <a href="https://github.com/EyalRuf" rel="noopener noreferrer" target="_blank" className="contact-icon git" ><img src="github.png" className="contact-icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}