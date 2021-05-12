import React from 'react';
import { Box, makeStyles, Theme, createStyles, Grid, Typography } from '@material-ui/core';
import GameCard from './GameCard';

import './Portfolio.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            margin: "50px 100px",
            minWidth: "50vw",
            minHeight: "100vh",
        }
    })
);

export default function Portfolio() {
    const classes = useStyles();

    return (
        <Box className={classes.box + " portfolio-bg"}>
            <Typography variant="h3" color="primary">
                Portfolio
            </Typography>
            <br/>
            <Typography variant="h5" color="textPrimary">
                Here are some examples of games I have developed / co-developed over my studies and/or before with download/github links.
                 <br />
                Feel free to try them and send me feedback or head over to github and send me code reviews. I would love to hear your thoughts
                so I could become a better coder and game designer.
            </Typography>
            <br />
            <Grid container spacing={10}>
                <Grid item>
                    {GameCard("Colormore", "June 11 2020", "/my_games/Coloremore.png", `
                        A 2d, social, sharing and supporting game meant to help people deal with the negative effects of
                        social distancing. Developed in Unity + Photon for unity (PUN2) as the multiplayer engine. 
                        Was created in a team environment whithin my Communcation & Multimedia Design studies.
                    `, "https://github.com/EyalRuf/Colormore",
                    "https://drive.google.com/file/d/1HHVVgQ0By0wUhpQlQUTHMjlj2tu7_zCl/view?usp=sharing")}
                </Grid>
                <Grid item>
                    {GameCard("Underdeveloped", "February 02, 2020", "/my_games/underdeveloped.gif", `
                        A 2d platformer where you, as the player, get to 'fix' a broken game. You do that by firstly earning money from
                        finishing levels and killing randomly generated enemies, then spending that money on game fixes.
                        Developped in GameMaker Studio 2 whithin a Game development hackathon called Game Jam.
                    `, "https://github.com/EyalRuf/Underdeveloped",
                    "https://drive.google.com/file/d/12fr7iZR-GeK3hTAPf2E90k2I0jr9nsX-/view?usp=sharing")}
                </Grid>
                <Grid item>
                    {GameCard("Dancing Tree", "April 09, 2020", "/my_games/DancingTree.jpg", `
                        A mobile rhythym game created with intention to raise awereness and educate on the topic of sustainability
                        to children aged 8-12. As you play along the music and collect leaves, the tree is spouting facts and knowledge
                        on the topic and the longer the play the more versed on this topic you'll be. Developped in Unity whithin a
                        team enironment under my Communcation & Multimedia Design studies.
                    `, "https://github.com/EyalRuf/DancingTree",
                    "https://drive.google.com/file/d/11pUK9Le6gwiW26JnD0vaWAOOgHTY_AZp/view?usp=sharing")}
                </Grid>
                <Grid item>
                    {GameCard("Red Sea", "January 21, 2020", "/my_games/RedSea.png", `
                        A puzzle game that happens in a business/industial environment.You, 'the new fish', have to figure your way up to the top
                        of the food chain and become the big fish of the company while meeting strange and bizzare characters along the way.
                        Developped in GameMaker Studio 2 whithin team enironment under my Communcation & Multimedia Design studies.
                    `, "https://github.com/EyalRuf/GEAQ",
                    "https://drive.google.com/file/d/1gcBPmKZ6VaypVE3UeDRyITYltwRkzwe0/view?usp=sharing")}
                </Grid>
                <Grid item>
                    {GameCard("Game Of Throws", "February 01, 2015", "/my_games/GOT.gif", `
                        A multiplayer 2 team battle arena. You pick a side and battle to the death round by round. Each round you get money 
                        that you can spend on powerful items that help you hurt (mostly) your foes. Developed in XNA (C#). I made this game 
                        together with a few friends during our army programming course in the IDF.
                    `, "https://github.com/EyalRuf/Colormore")}
                </Grid>
            </Grid>
        </Box>
    );
}
