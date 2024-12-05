import { createContext , useState, useEffect} from "react";
import apiService from "../services/apiService"; 
export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const data = await apiService.getUser();
      setUsers(data);
    };

    fetchUser();
  }, [])
  
  return (
    <ContextGlobal.Provider value={{users}}>
      {children}
    </ContextGlobal.Provider>
  );
};
