import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../store/features/authSlice";
import { Button, Container, Paper, TextField, Typography, Divider, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const  navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login({ email, password }));
    };


    return (
       <Container
            maxWidth = "sm"
            sx={{
                mt: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
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


                <Typography variant="h5" fontWeight= "Bold" gutterBottom> Welcome Back </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom> Login to your account </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={2} sx={{ mb: 3}}>
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

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
                        color="inherit"
                        onClick={ () => navigate("/signup")}
                        fullWidth
                        sx={{
                            color: "#1976dc",
                            textTransform: "none",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Don't have an account? Sign Up 
                    </Button>

                </Stack>
            </Paper>
       </Container>
    );
};

export default Login;