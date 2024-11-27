import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../store/features/authSlice";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"
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
                elevation={10}
                sx={{
                    padding: 4,
                    background: "linear-gradient(145deg, #A50044, #004D98)",
                    color: "white",
                    borderRadius: "2",
                    textAlign: "center"
                }}            
            >


                <Typography variant="h4" gutterBottom> Login Page</Typography>

                <Box>
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            style: { color: "white"},
                        }}
                        InputLabelProps={{
                            style: { color: "white"},
                        }}
                    />

                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            style: { color: "white"},
                        }}
                        InputLabelProps={{
                            style: { color: "white"}
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{
                            mt: 2, 
                            fontWeight: "bold"
                        }}
                    >
                        Login 
                    </Button>

                    <Button
                        variant="text"
                        color="inherit"
                        onClick={ () => navigate("/signup")}
                        sx={{
                            mt: 1
                        }}
                    >
                        Don't have an account? Sign Up 
                    </Button>

                </Box>
            </Paper>
       </Container>
    );
};

export default Login;