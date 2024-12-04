import React, { useState } from "react";
import AddProductForm from "./AddUserForm";
import { User } from "../../types/User";
import PageHeader from "../PageHeader";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";
import UserList from "./UserList";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";

const UserParent: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isAddingUser, setIsAddingUser] = useState<boolean>(false);

  const handleSelectUserForUpdate = (user: User) => {
    setSelectedUser(user);
    setIsAddingUser(true); // Ouvre le popup pour modifier l'utilisateur
  };

  const clearSelectedUser = () => {
    setSelectedUser(null);
    setIsAddingUser(false); // Désactive le formulaire et ferme le popup
  };

  const handleOpenAddUser = () => {
    setSelectedUser(null); // On s'assure qu'aucun utilisateur n'est sélectionné
    setIsAddingUser(true); // Ouvre le popup
  };

  const handleCloseDialog = () => {
    setIsAddingUser(false); // Ferme le popup
  };

  return (
    <>
      <PageHeader title="User Section" icon={<PeopleOutlineTwoToneIcon />} />

      {/* Bouton Add User */}
      <Button variant="contained" color="secondary" onClick={handleOpenAddUser} sx={{margin:"10px 0px"}}>
        Add User
      </Button>

      {/* Modal pour le formulaire */}
      <Dialog open={isAddingUser} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>{selectedUser ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <AddProductForm userToUpdate={selectedUser} clearSelectedUser={clearSelectedUser} />
        </DialogContent>
      </Dialog>

      {/* Liste des utilisateurs */}
      <UserList onUpdateUser={handleSelectUserForUpdate} />
    </>
  );
};

export default UserParent;
