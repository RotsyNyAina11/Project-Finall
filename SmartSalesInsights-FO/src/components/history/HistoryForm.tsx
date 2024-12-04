import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { AppDispatch} from "../../store/store";
import { addNewHistory, updateExistingHistory } from "../../store/features/historysThunks"; 
//import { addProduct } from "../../store/features/products.slice";
 
import { History } from "../../types/History";
import  Grid2  from "@mui/material/Grid2";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";


interface AddHistoryFormProps {
    historyToUpdate?: History | null;
    clearSelectedHistory: () => void ;
  }
  
  const AddProductForm: React.FC<AddHistoryFormProps> = ({
    historyToUpdate,
    clearSelectedHistory,
  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [history, setHistory] = useState<History>(
      historyToUpdate || { id: 0, idClient: "", productName: "",productId:"", productCategorie: "", date: "" }
    );
  
     useEffect(() => {
      if (historyToUpdate) {
        setHistory(historyToUpdate);
      }
    }, [historyToUpdate]); 
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (historyToUpdate) {
        dispatch(updateExistingHistory({ id: history.id, history }));
      } else {
        dispatch(addNewHistory(history));
      }
      clearSelectedHistory(); // Réinitialise le formulaire
    };

    const handleReset = (e: React.FormEvent) => {
      e.preventDefault();
      setHistory({ id: 0, idClient: "", productId: "", productName: "", productCategorie:"",date:"" })
    }
  
    return (
      <form  style={{
        width: "100%", // Applique directement une largeur au formulaire
        margin: "10px", // Corrigez `Margin` en `margin` (sensibilité à la casse)
      }}>
        
           <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label" color="secondary">History</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={product.categorie}
              label="Categorie"
              color="secondary"
              sx={{
                "& .MuiSelect-select": {
                  color:"gray"
                },
                
              }}
              onChange={(e)=>setProduct({...product, categorie: e.target.value})}
            >
              <MenuItem value="Vetement" sx={{color: "gray", ":hover":{backgroundColor:"rgba(128, 128, 128, 0.2)"}}}>Vetement</MenuItem>
              <MenuItem value="Chaussure" sx={{color: "gray", ":hover":{backgroundColor:"rgba(128, 128, 128, 0.2)"}}}>Chaussure</MenuItem>
              <MenuItem value="Casquette" sx={{color: "gray", ":hover":{backgroundColor:"rgba(128, 128, 128, 0.2)"}}}>Casquette</MenuItem>
            </Select>
          </FormControl>
        <Button variant="contained" onClick={handleSubmit} color="secondary" >Enregistrer</Button>
        <Button variant="contained" onClick={handleReset} color="secondary">Restaurer</Button>

      </form>
    );
  };
  export default AddProductForm;
  