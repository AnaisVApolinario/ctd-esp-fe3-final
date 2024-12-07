import { useContext } from "react";
import Button from "./Button";
import { ContextGlobal } from "../Context/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { favs, setFavs } = useContext(ContextGlobal);
  // const [isFav, setIsFav] = useState(false);
  // Determinar si esta tarjeta es favorita
  // Determinar si esta tarjeta es favorita
  const isFav = favs.some((fav) => fav.id === id);
  const addFav = () => {
    const newFav = { name, username, id };
    setFavs((prevFavs) => {
      // const updatedFavs = [...prevFavs, newFav];
      // localStorage.setItem("favs", JSON.stringify(updatedFavs));
      // return updatedFavs;
      const favExists = prevFavs.some((fav) => fav.id === id);
      let updatedFavs;
      if (favExists) {
        // Eliminar el favorito si ya existe
        updatedFavs = prevFavs.filter((fav) => fav.id !== id);
      } else {
        // Agregar el nuevo favorito si no existe
        updatedFavs = [...prevFavs, newFav];
      }
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return updatedFavs;
    });
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
