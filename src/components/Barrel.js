import React from "react";
import PropTypes from "prop-types";

function Barrel(props){
  return (
    <React.Fragment>
    <div onClick={() => props.onBarrelClick(props.id)}>

      <h2>{props.name}, by {props.brand}</h2>
      <p>${props.price}/pint</p>
      <p>Available Pints: {props.remainingPints}</p>
      <p>Alcohol by Volume: {props.abv}%</p>
      <p>Click on me to view details and sell pints!</p>
      <hr/>

    </div>
    </React.Fragment>
  )
}

Barrel.propTypes = {
  name: PropTypes.string.isRequired, // Name of brew "Fifth Mountain Ale"
  brand: PropTypes.string.isRequired, // Brand of Barrel "Jack Daniels"
  price: PropTypes.string.isRequired, // Price for a pint "$1.25"
  abv: PropTypes.string.isRequired, // Alcohol by volume, "5.5%"
  id: PropTypes.string,
  remainingPints: PropTypes.number,
  onBarrelClick: PropTypes.func,
}

export default Barrel;