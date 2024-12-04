import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { AppDispatch} from "../../store/store";
import { addNewUser, updateExistingUser } from "../../store/features/usersThunks";  
import { User } from "../../types/User";
import  Grid2  from "@mui/material/Grid2";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import RestoreIcon from '@mui/icons-material/Restore';


interface AddUserFormProps {
    userToUpdate?: User | null;
    clearSelectedUser: () => void ;
  }
  
  const AddUserForm: React.FC<AddUserFormProps> = ({
    userToUpdate,
    clearSelectedUser,
  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [user, setUser] = useState<User>(
      userToUpdate || { id: 0, name: "", email: "", role: "", password: "" }
    );
  
     useEffect(() => {
      if (userToUpdate) {
        setUser(userToUpdate);
      }
    }, [userToUpdate]); 
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert("tonga ato")
      if (userToUpdate) {
        dispatch(updateExistingUser({ id: user.id, user }));
      } else {
        dispatch(addNewUser(user));
      }
      clearSelectedUser(); // Réinitialise le formulaire
    };

    const handleReset = (e: React.FormEvent) => {
      e.preventDefault();
      setUser({ id: 0, name: "", email: "", role: "", password:"" })
    }
  
    return (
      <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: "600px", // Limite la largeur maximale du formulaire
        margin: "20px auto", // Centrer le formulaire
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "secondary.main" }}
      >
        Add / Update User
      </Typography>
    
      {/* Champs de formulaire */}
      <Grid2 container spacing={2} sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between" }}>
        {/* Name Field */}
        <Grid2 
            sx={{
              width: { xs: "100%", sm: "50%", md: "100%" }, // Même logique pour ce champ
            }}
            marginBottom={1}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            color="secondary"
            sx={{
              "& .MuiInputBase-input": {
                color: "#000000", // Couleur du texte
              },
            }}
          />
        </Grid2>
        </Grid2>    
        <Grid2 container spacing={2} sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between" }}>
        <Grid2 
            sx={{
              width: { xs: "100%", sm: "50%", md: "100%" }, // Même logique pour ce champ
            }}
            marginBottom={1}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            color="secondary"
            sx={{
              "& .MuiInputBase-input": {
                color: "#000000", // Couleur du texte
              },
            }}
          />
        </Grid2>
        </Grid2>
    
        {/* Role Field */}
      <Grid2 container spacing={2} sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between" }}>
      <Grid2 
            sx={{
              width: { xs: "100%", sm: "50%", md: "100%" }, // Même logique pour ce champ
            }}
            marginBottom={1}
        >
          <FormControl fullWidth>
            <InputLabel color="secondary">Role</InputLabel>
            <Select
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              color="secondary"
              sx={{
                "& .MuiSelect-select": {
                  color: "gray", // Texte gris
                },
              }}
            >
              <MenuItem
                value="Administrator"
                sx={{ color: "gray", ":hover": { backgroundColor: "rgba(128, 128, 128, 0.2)" } }}
              >
                Administrator
              </MenuItem>
              <MenuItem
                value="User"
                sx={{ color: "gray", ":hover": { backgroundColor: "rgba(128, 128, 128, 0.2)" } }}
              >
                User
              </MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2>
      <Grid2 sx={{
                      width: { xs: "100%", sm: "50%", md: "100%" }, // Même logique pour ce champ
                    }}
                    marginBottom={1}
          >
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            color="secondary"
            sx={{
              "& .MuiInputBase-input": {
                color: "#000000", // Couleur du texte
              },
            }}
          />
        </Grid2>
      </Grid2>

    
      {/* Boutons */}
      <Grid2
        container
        spacing={2}
        sx={{ marginTop: "20px", justifyContent: "center" }}
      >
        <Grid2>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<SaveAltIcon />}
            onClick={handleSubmit}
          >
            SAVE
          </Button>
        </Grid2>
        <Grid2>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<RestoreIcon />}
            onClick={handleReset}
          >
            RESET
          </Button>
        </Grid2>
      </Grid2>
    </Box>
    
    );
  };
 /*  <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">user name :</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="price">user price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={user.price}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="categorie">user categorie</label>
          <input
            type="text"
            name="categorie"
            id="categorie"
            value={user.categorie}
            onChange={handleChange}
          />
          <br />
          <button type="submit">{userToUpdate ? "Update" : "Save"}</button>
          {userToUpdate && (
            <button type="button" onClick={clearSelecteduser}>
              Cancel
            </button>
          )}
        </form>
      </div> */
  export default AddUserForm;
  