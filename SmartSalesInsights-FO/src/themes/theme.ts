import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976D2", 
            contrastText: "#FFFFFF", 
        },
        secondary: {
            main: "#2c66AA", 
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#F5F5F5", 
            paper: "#FFFFFF", 
        },
        text: {
            primary: "#1E1E1E", 
            secondary: "#757575", 
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif", 
        h5: {
            fontWeight: "bold",
        },
        button: {
            textTransform: "none", 
            fontWeight: "bold",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, // Coins arrondis pour un aspect moderne
                    boxShadow: "none", // Suppression de l'ombre pour un style épuré
                    "&:hover": {
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Ombre légère au survol
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12, // Coins arrondis pour les cartes et formulaires
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)", // Profondeur subtile
                },
            },
        },
    },
});

export default theme;
