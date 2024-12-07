import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
      <h1 className="page__title">Dentists Favs</h1>
      <div className="card__container">
        {state.favs &&
          state.favs.map((fav) => (
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
