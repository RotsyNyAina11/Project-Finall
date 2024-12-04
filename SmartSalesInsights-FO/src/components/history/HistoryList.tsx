import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchHistorys } from "../../store/features/historysThunks";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { History } from "../../types/History";
   
   
  
    
    const UserList: React.FC = () => {
        const dispatch: AppDispatch = useDispatch();
        const historys = useSelector((state: RootState) => state.historys);

    useEffect(()=>{
        dispatch(fetchHistorys());
    }, [dispatch])
  
    
  
    return (
      <TableContainer component={Paper}>
        <Table>
          {/* En-tête de la table */}
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{color:"gray"}}>id</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>idClient</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>productId</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>productName</TableCell>
              <TableCell align="left" sx={{color:"gray"}}>productCategorie</TableCell>
              <TableCell align="center" sx={{color:"gray"}}>Price</TableCell>
              <TableCell align="center" sx={{color:"gray"}}>Date</TableCell>
            </TableRow>
          </TableHead>
  
          {/* Corps de la table */}
          <TableBody>
            {historys.map((history : History) => (
              <TableRow key={history.id}>
                <TableCell sx={{color:"gray"}}>{history.id}</TableCell>
                <TableCell sx={{color:"gray"}}>${history.idClient}</TableCell>
                <TableCell sx={{color:"gray"}}>${history.productId}</TableCell>
                <TableCell sx={{color:"gray"}}>{history.productName}</TableCell>
                <TableCell sx={{color:"gray"}}>{history.productCategorie}</TableCell>
                <TableCell sx={{color:"gray"}}>{history.price}</TableCell>
                <TableCell sx={{color:"gray"}}>{history.date}</TableCell>
                <TableCell align="center" sx={{color:"gray"}}> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default UserList;
  