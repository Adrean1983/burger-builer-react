const solutionOne = {
  // import React from "react";
  // import classes from "./BurgerIngredient.module.css";
  // const burgerIngredient = props => {
  // let ingredient = null;
  //   switch (props.type) {
  //     case "bread-bottom":
  //       ingredient = <div className={classes.BreadBottom}></div>;
  //       break;
  //     case "bread-top":
  //       ingredient = (
  //         <div className={classes.BreadTop}>
  //           <div className={classes.Seeds1}></div>
  //         </div>
  //       );
  //       break;
  //     case "meat":
  //       ingredient = <div className={classes.Meat}></div>;
  //       break;
  //     case "chesse":
  //       ingredient = <div className={classes.Cheese}></div>;
  //       break;
  //     case "salad":
  //       ingredient = <div className={classes.Salad}></div>;
  //       break;
  //     case "bacon":
  //       ingredient = <div className={classes.Bacon}></div>;
  //       break;
  //     default:
  //       ingredient = null;
  //   }
  //   return ingredient
  // }
  // export default burgerIngredient;
};

const solutionTwo = {
  //   import React, { Component } from "react";
  // import PropTypes from "prop-types";
  // import classes from "./BurgerIngredient.module.css";
  // class BurgerIngredient extends Component {
  //   render() {
  //     let ingredient = null;
  //     switch (this.props.type) {
  //       case "bread-bottom":
  //         ingredient = <div className={classes.BreadBottom}></div>;
  //         break;
  //       case "bread-top":
  //         ingredient = (
  //           <div className={classes.BreadTop}>
  //             <div className={classes.Seeds1}></div>
  //           </div>
  //         );
  //         break;
  //       case "meat":
  //         ingredient = <div className={classes.Meat}></div>;
  //         break;
  //       case "cheese":
  //         ingredient = <div className={classes.Cheese}></div>;
  //         break;
  //       case "salad":
  //         ingredient = <div className={classes.Salad}></div>;
  //         break;
  //       case "bacon":
  //         ingredient = <div className={classes.Bacon}></div>;
  //         break;
  //       default:
  //         ingredient = null;
  //     }
  //     return ingredient;
  //   }
  // }
  // BurgerIngredient.propTypes = {
  //   type: PropTypes.string.isRequired
  // };
  // export default BurgerIngredient;
};

const solutionThree = {
  //   // CSS
  //   .Burger {
  //   width: 100%;
  //   margin: auto;
  //   height: 250px;
  //   overflow: scroll;
  //   text-align: center;
  //   font-weight: bold;
  //   font-size: 1.2rem;
  // }
  // @media (min-width: 500px) and (max-height: 400px) {
  //   .Burger {
  //     width: 350px;
  //     height: 300px;
  //   }
  // }
  // @media (min-width: 500px) and (min-height: 401px) {
  //   .Burger {
  //     width: 450px;
  //     height: 400px;
  //   }
  // }
  // @media (min-width: 1000px) and (min-height: 700px) {
  //   .Burger {
  //     width: 700px;
  //     height: 600px;
  //   }
  // }
  // Javascript:
  // ---Burger---
  //   import React from "react";
  // import classes from "./Burger.module.css";
  // import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
  // const burger = () => {
  //   return (
  //     <div className={classes.Burger}>
  //       <BurgerIngredient type="bread-top" />
  //       <BurgerIngredient type="cheese" />
  //       <BurgerIngredient type="meat" />
  //       <BurgerIngredient type="bread-bottom" />
  //     </div>
  //   );
  // };
  // export default burger;
  // ---BurgerBuilder---
  //   import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // class BurgerBuilder extends Component {
  //   render() {
  //     return (
  //       <Auxillary>
  //         <Burger />
  //         <div>Build Controls</div>
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
};

const solutionFour = {
  // import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // class BurgerBuilder extends Component {
  //   state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 1,
  //       cheese: 2,
  //       meat: 1
  //     }
  //   };
  //   render() {
  //     return (
  //       <Auxillary>
  //         <Burger ingredients={this.state.ingredients} />
  //         <div>Build Controls</div>
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
  //   // ---Burger.js---
  // import React from "react";
  // import classes from "./Burger.module.css";
  // import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
  // const burger = props => {
  //   let transformedIngredients = Object.keys(props.ingredients)
  //     .map(ingredientKey => {
  //       return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
  //         return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
  //       });
  //     })
  //     .reduce((arr, el) => {
  //       return arr.concat(el);
  //     }, []);
  //   if (transformedIngredients.length === 0) {
  //     transformedIngredients = <p>Please start adding ingredients</p>;
  //   }
  //   console.log(transformedIngredients);
  //   return (
  //     <div className={classes.Burger}>
  //       <BurgerIngredient type="bread-top" />
  //       {transformedIngredients}
  //       <BurgerIngredient type="bread-bottom" />
  //     </div>
  //   );
  // };
  // export default burger;
};

const solutionFive = {
  // --BuildControls--
  //   import React from "react";
  // import classes from "./BuildControls.module.css";
  // import BuildControl from "./BuildControl/BuildControl";
  // const controls = [
  //   { label: "Salad", type: "salad" },
  //   { label: "Bacon", type: "bacon" },
  //   { label: "Cheese", type: "cheese" },
  //   { label: "Meat", type: "meat" }
  // ];
  // const buildControls = props => (
  //   <div className={classes.BuildControls}>
  //     {controls.map(ctrl => (
  //       <BuildControl key={ctrl.label} label={ctrl.type} />
  //     ))}
  //   </div>
  // );
  // export default buildControls;
  // --BuildControl--
  //   import React from "react";
  // import classes from "./BuildControl.module.css";
  // const buildControl = props => (
  //   <div className={classes.BuildControl}>
  //     <div className={classes.Label}>{props.label}</div>
  //     <button className={classes.Less}>Less</button>
  //     <button className={classes.More}>More</button>
  //   </div>
  // );
  // export default buildControl;
  // --BugerBuilder--
  //   import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // import BuildControls from "../../components/Burger/BuildControls/BuildControls";
  // class BurgerBuilder extends Component {
  //   state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 1,
  //       cheese: 2,
  //       meat: 1
  //     }
  //   };
  //   render() {
  //     return (
  //       <Auxillary>
  //         <Burger ingredients={this.state.ingredients} />
  //         <BuildControls />
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
};
