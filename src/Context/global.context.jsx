import { createContext , useState, useEffect} from "react";
import apiService from "../services/apiService"; 

export const initialState = {theme: "", data: []}
const initialFavs = JSON.parse(localStorage.getItem('favs'));

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const [favs, setFavs] = useState([]); 
  const [favs, setFavs] = useState(initialFavs ? initialFavs : []);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await apiService.getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, [])
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs])

  return (
    <ContextGlobal.Provider value={{users, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};
