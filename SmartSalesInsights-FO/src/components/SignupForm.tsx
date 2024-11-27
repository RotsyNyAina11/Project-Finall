import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../store/features/authSlice";
import { Container, Paper, Typography, Box, TextField, Button } from "@mui/material";

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const  [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setconfirmPassword ] = useState('');

    const handleSignup = () => {
        if (password === confirmPassword){
            dispatch(signup({ email, password }));
            alert ("SignUp succesful! Redirecting to login page.");
            navigate("/login");
        } else {
            alert("Passwords do not match.");
        }
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
                <Typography variant="h4" gutterBottom>Sign Up</Typography>
                <Box>
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{ style: { color: "white" } }}
                        InputLabelProps={{ style: { color: "white" } }}
                    />

                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{ style: { color: "white" } }}
                        InputLabelProps={{ style: { color: "white" } }}
                    />

                    <TextField
                        type="password"
                        label="Confirm password"
                        variant="outlined"
                        required
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        InputProps={{ style: { color: "white" } }}
                        InputLabelProps={{ style: { color: "white" } }}
                        
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSignup}
                        sx={{ mt: 2, fontWeight: "bold"}}
                    >
                        Sign Up
                    </Button>

                    <Button
                        variant="text"
                        color="inherit"
                        onClick={() => navigate("/login")}
                        sx={{ mt: 1}}
                    >
                        Already have an account? Login.
                    </Button>
                    
                </Box>
            </Paper>
        </Container>
    );

};

export default Signup;