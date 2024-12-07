import { useContext } from "react";
import Button from "./Button";
import { ContextGlobal } from "../Context/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const isFav = state.favs.some((fav) => fav.id === id);

  const addFav = () => {
    const newFav = { name, username, id };

    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: newFav });
    } else {
      dispatch({ type: "ADD_FAV", payload: newFav });
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img
          src="https://www.shutterstock.com/image-photo/dentist-man-holding-tools-isolated-600nw-1954070518.jpg"
          alt="imagen del dentista"
          className="card__img"
        />
      </Link>
      <h3 className="card__title">{name}</h3>
      <p className="card__text">{username}</p>
      <Button onClick={addFav}>
        <i className="bx bxs-heart" style={{ color: isFav ? "red" : "" }}></i>
      </Button>
    </div>
  );
};

export default Card;
