import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchUsers, deleteExistingUser } from "../../store/features/usersThunks";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { User } from "../../types/User";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

/* interface ProductListProps{
    products: Product[];
    const products: Product[] = useSelector((state: RootState) => state.product)
    }
    */
   
   
   interface UserListProps {
       onUpdateUser: (user: User) => void;
    }
    
    const UserList: React.FC<UserListProps> = ({ onUpdateUser }) => {
        const dispatch: AppDispatch = useDispatch();
        const users = useSelector((state: RootState) => state.users);

    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch])
  
    const handleDeleteUser = (id: number) => {
      dispatch(deleteExistingUser(id));
    };
  
    return (
      <TableContainer component={Paper}>
        <Table>
          {/* En-tête de la table */}
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{color:"gray"}}>Name</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>Email</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>Rôle</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>Password</TableCell>
              <TableCell align="center" sx={{color:"gray"}}>Actions</TableCell>
            </TableRow>
          </TableHead>
  
          {/* Corps de la table */}
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{color:"gray"}}>{user.name}</TableCell>
                <TableCell sx={{color:"gray"}}>${user.email}</TableCell>
                <TableCell sx={{color:"gray"}}>{user.role}</TableCell>
                <TableCell sx={{color:"gray"}}>{user.password}</TableCell>
                <TableCell align="center" sx={{color:"gray"}}>
                  {/* Boutons d'action */}
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<EditIcon/>}
                    onClick={() => onUpdateUser(user)}
                    sx={{ marginRight: "8px" }}
                  >
                    EDIT
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon/>}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default UserList;
  