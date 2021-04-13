import React from 'react';

const Card = ({ name, thumbnail, extension}) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img
        alt="Marvel Characters"
        src={`${thumbnail}/standard_xlarge.${extension}`}
      />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );



}

export default Card;