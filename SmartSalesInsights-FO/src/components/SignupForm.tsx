import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../store/features/authSlice";
import { Container, Paper, Typography, TextField, Button, Divider, Stack } from "@mui/material";

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async () => {
        console.log('Signup button clicked');
        if (password === confirmPassword) {
            try{
                const response = await fetch("http://localhost:3000/auth/signup",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password}),
                });

                if (!response.ok){
                    const errorData = await response.json();
                    alert(errorData.message || "An error occured during signup.");
                    return;
                }

                dispatch(signup({ email, password }));
                alert("Signup successful! Redirection to login page");
                navigate("/login");

            } catch (error){
                alert("An unexpected error occured. Please try  again");
            }

        } else {
            alert("Passwords do not match.");
        }
    };

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
                    Create Your Account
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Join us to explore exclusive deals and products.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={2} sx={{ mb: 3 }}>
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
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Stack>

                <Button
                    variant="contained"
                    size="large"
                    onClick={handleSignup}
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
                    Sign Up
                </Button>

                <Button
                    variant="text"
                    onClick={() => navigate("/login")}
                    fullWidth
                    sx={{
                        color: "#1976d2",
                        textTransform: "none",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    Already have an account? Login.
                </Button>
            </Paper>
        </Container>
    );
};

export default Signup;
