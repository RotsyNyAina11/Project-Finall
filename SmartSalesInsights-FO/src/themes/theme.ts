import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: "#A50044",
        },

        secondary : {
            main: "#004D98",
        },

        background: {
            default: "#1E1E1E", 
        },

        text: {
            primary: "#FFFFFF",
        },
    },

    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif"
    },
});

export default theme;