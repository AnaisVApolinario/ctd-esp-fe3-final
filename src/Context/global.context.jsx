import { createContext , useEffect, useReducer } from "react";
import apiService from "../services/apiService"; 
import { reducer } from "../Reducer/reducer";

const initialFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favs: initialFavs,
  users: [],
  theme: "light",
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);


   useEffect(() => {
    const fetchUsers = async () => {
      const users = await apiService.getUsers();
      dispatch({ type: "SET_USERS", payload: users });
    };
    console.log(fetchUsers());
    
    fetchUsers();
  }, []);

 
   useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", state.theme === "dark");
  }, [state.theme]);


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
