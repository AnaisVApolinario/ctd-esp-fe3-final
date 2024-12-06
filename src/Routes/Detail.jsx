import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiService from "../services/apiService";
import Button from "../Components/Button";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [user, setUser] = useState({});
  const parms = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await apiService.getUser(parms.id);
      console.log(response);
      setUser(response);
    };
    fetchUser();
  }, [parms.id]);

  return (
    <>
      <h1 className="page__title">Detail Dentist id </h1>
      <div className="detail__container">
        <div className="detail__img">
          <img
            src="https://www.shutterstock.com/image-photo/dentist-man-holding-tools-isolated-600nw-1954070518.jpg"
            alt="imagen del dentista"
          />
        </div>
        <div className="detail__info">
          <div className="detail__info__text">
            <h3 className="card__title">Nombre: {user.name}</h3>
            <p className="card__text">Email: {user.email}</p>
            <p className="card__text">Teléfono: {user.phone}</p>
            <p className="card__text">Sitio Web: {user.website}</p>
          </div>
          <Button>
            <i className="bx bxs-heart"></i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Detail;
