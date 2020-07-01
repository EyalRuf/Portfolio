import React from 'react';
import { Typography, Box, Grid, Link, makeStyles, createStyles, Theme } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

import "./Footer.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.text.primary,
            "&:hover": {
                color: theme.palette.primary.main
            }
        },
        grid: {
            flexFlow: "row nowrap"
        },
        gridItem: {
            flex: 1,
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-start"
        },
    }),
);

export default function Footer() {
    const classes = useStyles();

    return (
        <footer>
            <Box component="div" bgcolor="background.paper" m={2.5} p={5} borderRadius="4px">
                <Grid container spacing={8} justify="space-between" className={classes.grid}>
                    <Grid item className={classes.gridItem}>
                        <Typography variant="h6">
                            About me
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p" style={{lineHeight: 1.25}}>
                            I am a 24 year old Game Designer currently studying in the netherlands. I am from Israel 
                            originally and after finishing my highschool education I spend 5 years honing my
                             skills as a programmer when working for the IDF (Israel defence forces).
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1" color="textSecondary" component="p" style={{ lineHeight: 1.25 }}>
                            I am an avid gamer and my favorite games are either whithin the puzzle game genre. 
                            For example Neverhood, Machinarium, and The Room series.
                            I also enjoy competitive games a lot, like Dota 2, Csgo, and Rocket League.
                            Other worthy mentions for me are The Last Of Us series, Assassins Creed series and all From Software games.
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" color="textSecondary" component="p" style={{ lineHeight: 1.25 }}>
                            Besides my love for games, I am a Potterhead, a beginner level cook, 
                            and I love to cycle, hike, and experience nature in any way.
                        </Typography>
                    </Grid>
                    <Grid item className={classes.gridItem} style={{ flex: 1 }}>
                        <Typography variant="h6">
                            Contact me
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p" style={{ flex: 1 }}>
                            I am active on all of these platforms and I would love hearing from you
                        </Typography>
                        <Grid container justify="flex-start" style={{ flex: 1 }}>
                            <Link href="mailto:eyalrufeisen@gmail.com" underline="hover" classes={classes}>
                                <MailIcon className="link-icon" style={{ fontSize: "66px", margin: "auto" }} />
                            </Link>
                            <Link href="https://www.facebook.com/eyalruf/" underline="hover" classes={classes}>
                                <FacebookIcon className="link-icon" style={{ fontSize: "65px", margin: "auto" }} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/eyal-rufeisen-a5a40517a/" underline="hover" classes={classes}>
                                <LinkedInIcon className="link-icon" style={{ fontSize: "65px", margin: "auto" }} />
                            </Link>
                            <Link href="https://github.com/EyalRuf?tab=repositories" underline="hover" classes={classes}>
                                <GitHubIcon className="link-icon" style={{ fontSize: "55px" }} />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
}
