import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div>{props.item}</div>
    </div>
  );
};

export default Card;
