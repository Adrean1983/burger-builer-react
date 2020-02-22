import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDraw.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxillary from "../../../hoc/Auxillary";

const SideDraw = props => {
  let attachedClass = [classes.SideDraw, classes.Close];
  if (props.open) {
    attachedClass = [classes.SideDraw, classes.Open];
  }
  return (
    <Auxillary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClass.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxillary>
  );
};

export default SideDraw;
