import React from 'react';
import '../../index.css';
import './Games.css';

export default function Games () {
    return (
        <div id="Games" className="site-page">
            <div className="container">
                <div className="content games-content">
                    <div className="games-content-item games-text">
                        Games
                    </div>
                    <div className="games-content-item games-container">
                        
                        <div className="game-container">
                            <img src="ColormoreP.png" className="game-container-item"/>
                            <div className="game-container-item">
                                <img src="ColormoreN.png" className="game-container-item game-container-img"/>
                                <div className="icons icons1">
                                    <a href="https://stansu.itch.io/colormore" rel="noopener noreferrer" target="_blank"><img src="itch.png" /></a>
                                    <a href="https://github.com/EyalRuf/Colormore" rel="noopener noreferrer" target="_blank"><img src="github.png" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="game-container" >
                            <img src="RemnantsP.png" className="game-container-item"/>
                            <div className="game-container-item">
                                <img src="RemnantsN.png" className="game-container-item game-container-img" />
                                <div className="icons icons2">
                                    <a href="https://eyalruf.itch.io/remnants" rel="noopener noreferrer" target="_blank"><img src="itch.png" /></a>
                                    <a href="https://github.com/EyalRuf/GGJ2021" rel="noopener noreferrer" target="_blank"><img src="github.png" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="game-container">
                            <img src="StreamvivorP.png" className="game-container-item"/>
                            <div className="game-container-item">
                                <img src="StreamvivorN.png" className="game-container-item game-container-img" />
                                <div className="icons icons3">
                                    <a href="https://eyalruf.itch.io/streamvivor" rel="noopener noreferrer" target="_blank"><img src="itch.png" /></a>
                                    <a href="https://github.com/EyalRuf/GameLab-TMG" rel="noopener noreferrer" target="_blank"><img src="github.png" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="game-container">
                            <div className="game-container-item">
                                <img src="MoreGames.png" className="game-container-item game-container-img" />
                                <div className="icons icons4">
                                    <a href="https://eyalruf.itch.io/" rel="noopener noreferrer" target="_blank" className="icon-last-note1"><img src="itch.png" /></a>
                                    <a href="https://github.com/EyalRuf" rel="noopener noreferrer" target="_blank" className="icon-last-note2" ><img src="github.png" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}