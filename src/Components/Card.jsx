import { useContext } from "react";
import Button from "./Button";
import { ContextGlobal } from "../Context/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const { setFavs } = useContext(ContextGlobal);
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const newFav = { name, username, id };
    setFavs((prevFavs) => {
      const updatedFavs = [...prevFavs, newFav];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return updatedFavs;
    });
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img
          src="https://www.shutterstock.com/image-photo/dentist-man-holding-tools-isolated-600nw-1954070518.jpg"
          alt="imagen del dentista"
          className="card__img"
        />
      </Link>
      <h3 className="card__title">{name}</h3>
      <p className="card__text">{username}</p>
      <Button onClick={addFav}>
        <i className="bx bxs-heart"></i>
      </Button>
    </div>
  );
};

export default Card;
