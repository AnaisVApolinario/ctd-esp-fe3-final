export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id) };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export default reducer;