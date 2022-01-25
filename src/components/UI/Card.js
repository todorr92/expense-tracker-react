import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // getting all classes applied
  return <div className={classes}>{props.children}</div>; //getting all class styles applied inside of Card component
};

export default Card;
