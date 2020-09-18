import React from "react";
import PropTypes from "prop-types";
import Barrel from "./Barrel";

function BarrelList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.barrelList.map((barrel) =>
      <Barrel
      name = {barrel.name}
      brand = {barrel.brand}
      price = {barrel.price}
      abv = {barrel.abv}
      remainingPints = {barrel.remainingPints}
      id = {barrel.id}
      key = {barrel.id}
      onBarrelClick = { props.onBarrelSelection }
      />
      )}
      <hr/>
    </React.Fragment>
  );
}

BarrelList.propTypes = {
  barrelList: PropTypes.array,
  onBarrelSelection: PropTypes.func
};

export default BarrelList;