import React from "react";

import "./XodimCard.css";

const XodimCard = (props) => {
  const {img, job, name, email, tel} = props;
  return (
    <div className="cardHodim">
      <div className="cardInfo">
        <div className="cardImg">
          <img src={img} alt="employer img" />
        </div>
        <div className="cardDesc">
          <span className="cardJob">{job}</span>
          <div className=" aSD"></div>
          <br />
          <p>{name}</p>
          <div className="cardEmail">
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-envelope"></i>
            <span>Email: </span>
          <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="cardEmail">
            <span>Telefon:</span>
            <a href={`tel:${tel}`}>{tel}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XodimCard;
