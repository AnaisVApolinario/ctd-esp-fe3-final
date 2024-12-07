import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useContext(ContextGlobal);

  return (
    <>
      <h1 className="page__title">Dentists Favs</h1>
      <div className="card__container">
        {favs &&
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))}
      </div>
    </>
  );
};

export default Favs;
