import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        text: {
            primary: "#404040",
            secondary: "#FAF0D3"
        },
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#FAF0D3',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#81E8F8",
            paper: "#333333"
        },
    },
    typography: {
        fontFamily: "NanumPen"
    },
});

export default theme;
