import React from 'react';
import { Typography, makeStyles, Theme, createStyles, Card, CardHeader, IconButton, CardMedia, CardContent, CardActions, Collapse, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '40vw',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            backgroundSize: 'contain'
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        }
    })
);

export default function GameCard(cardTitle: string, cardSubtitle: string, imagepath: string, cardContent: string, githubUrl: string, downloadLink?: string) { 
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader action={
                    <>
                    {
                        downloadLink ?                        
                        <Link href={downloadLink}><IconButton aria-label="download"><GetAppIcon fontSize="large" /></IconButton></Link>
                        : null
                    }
                    <Link href={githubUrl}><IconButton aria-label="project repository"><GitHubIcon fontSize="large" /></IconButton></Link>
                    </>
                }
                title={cardTitle}
                subheader={cardSubtitle}
            />
            <CardMedia
                className={classes.media}
                image={imagepath}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {cardContent}
                </Typography>
            </CardContent>
        </Card>
    );
}