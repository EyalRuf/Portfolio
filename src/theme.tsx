import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        text: {
            primary: "#F2F2F2",
            secondary: "#FAF0D3"
        },
        primary: {
            main: '#F3B123'
        },
        secondary: {
            main: '#FAF0D3',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#404040",
            paper: "#333333"
        },
    },
    typography: {
        fontFamily: "myFirstFont"
    },
});

export default theme;
