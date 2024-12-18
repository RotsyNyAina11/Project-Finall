import { useState } from "react";
import { Button, Container, Paper, TextField, Typography, Divider, Stack, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  login } from "../store/features/authSlice"

const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = async () => {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if( data.access_token ){
            localStorage.setItem("access_token", data.access_token);
            dispatch(login({ email, password }));

            // Decoder le token JWT pour obtenir le role
            const decodedToken = JSON.parse(atob(data.access_token.split('.')[1]));
            const role = decodedToken.role;

            // Si le role est admin, redirige vers Dashboard
            if (role === 'admin'){
                console.log('Tafiditra ve');
                setDialogTitle('Connection successful');
                setDialogMessage('You are logged in as administrator.');
                navigate("/main");
            } else {
                setDialogTitle('Connection successful');
                setDialogMessage('You are logged in as client.');
            }
        }else {
            setDialogTitle('Error');
            setDialogMessage('Invalid credentials. Please try again.');
            setIsError(true);
        }
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        if(!isError){
            navigate('/');
        }
    }

    return (
        <Container
            maxWidth="sm"
            sx={{
                mt: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    backgroundColor: "#ffffff",
                    borderRadius: 3,
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
                    textAlign: "center",
                }}
            >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Welcome 
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Login to your account
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={2} sx={{ mb: 3 }}>
                    <TextField
                        type="email"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Stack>

                <Button
                    variant="contained"
                    size="large"
                    onClick={handleLogin}
                    fullWidth
                    sx={{
                        mb: 2,
                        backgroundColor: "#1976d2",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#1565c0",
                        },
                    }}
                >
                    Login
                </Button>

                <Button
                    variant="text"
                    onClick={() => navigate("/signup")}
                    fullWidth  
                    sx={{
                        color: "#1976d2",
                        textTransform: "none",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    Don’t have an account? Sign Up
                </Button>
            </Paper>

            {/** Boite de dialogue de confirmation ou erreur */}
            <Dialog
                open={dialogOpen}
                onClose={handleCloseDialog}
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

        </Container>
    );
};

export default Login;
