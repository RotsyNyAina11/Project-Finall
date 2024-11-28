import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976D2", // Bleu principal pour les boutons et les accents
            contrastText: "#FFFFFF", // Texte blanc sur les boutons primaires
        },
        secondary: {
            main: "#A50044", // Rouge blaugrana pour les accents secondaires
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#F5F5F5", // Fond clair pour une expérience de vente moderne
            paper: "#FFFFFF", // Fond des cartes et formulaires
        },
        text: {
            primary: "#1E1E1E", // Texte principal sombre pour contraste
            secondary: "#757575", // Texte secondaire gris pour complément
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif", // Police moderne et lisible
        h5: {
            fontWeight: "bold", // Titres engageants pour les sections importantes
        },
        button: {
            textTransform: "none", // Garde les boutons lisibles et modernes
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
