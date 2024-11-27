import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../store/features/authSlice";
import { Container, Paper, Typography, TextField, Button, Divider, Stack } from "@mui/material";

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
                elevation={3}
                sx={{
                    p:  4,
                    backgroundColor: "#ffffff",
                    borderRadius: 3,
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
                    textAlign: "center",
                }}                                                                  
            >
                <Typography variant="h5" fontWeight="bold" gutterBottom>Create your account</Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={2} sx={{ mb: 3}}>
                    <TextField
                        type="email"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                        type="password"
                        label="Confirm password"
                        variant="outlined"
                        required
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        
                    />

                    <Button
                        variant="contained"
                        size= "large"
                        onClick={handleSignup}
                        sx={{ 
                            mb: 2,
                            backgroundColor: "#1976d2",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#1565c0",
                            }
                        }}
                    >
                        Sign Up
                    </Button>

                    <Button
                        variant="text"
                        fullWidth
                        onClick={() => navigate("/login")}
                        sx={{ 
                            color: "#1976d2",
                            textTransform: "none",
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}
                    >
                        Already have an account? Login.
                    </Button>
                    
                </Stack>
            </Paper>
        </Container>
    );

};

export default Signup;