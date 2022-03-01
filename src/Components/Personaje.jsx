import React from "react";

const Personaje = ({ character = " " }) => {
  const { name, image, species } = character;

  return (
      //la m en materialize cambia la distribucion
    <>
      <div className="col s12 m3">
        <div className="card hoverable">
        <div  className="card-image">
          <img src={image} alt={`imagen-${name}`} className="card-img-top" />
          <span className="card-title">{name}</span>
        </div>
          <div className="card-coment">
            <p>{name}</p>
            <p>{species}</p>
          </div>
          <div className="card-action">
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Personaje;
