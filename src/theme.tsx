import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        text: {
            primary: "#c0c0c2",
            secondary: "#a3a3a3"
        },
        primary: {
            main: '#438a52'
        },
        secondary: {
            main: '#9c740c',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#18181d",
            paper: "#2c2c33"
        },
    },
    typography: {
        fontFamily: "Bahnschrift"
    }
});

export default theme;
