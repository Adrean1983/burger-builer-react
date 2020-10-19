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

const solutionSix = {
  // -----BurgerBuilder-----
  //   import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // import BuildControls from "../../components/Burger/BuildControls/BuildControls";
  // const INGREDIENT_PRICES = {
  //   salad: 0.5,
  //   cheese: 0.4,
  //   meat: 1.3,
  //   bacon: 0.7
  // };
  // class BurgerBuilder extends Component {
  //   state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 1,
  //       cheese: 2,
  //       meat: 1
  //     },
  //     totalPrice: 4
  //   };
  //   addIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     const updatedCount = oldCount + 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceAddition = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice + priceAddition;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   };
  //   removeIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     if (oldCount <= 0) {
  //       return;
  //     }
  //     const updatedCount = oldCount - 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceDeduction = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice - priceDeduction;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   };
  //   render() {
  //     const disabledInfo = {
  //       ...this.state.ingredients
  //     };
  //     for (let key in disabledInfo) {
  //       disabledInfo[key] = disabledInfo[key] <= 0;
  //     }
  //     return (
  //       <Auxillary>
  //         <Burger ingredients={this.state.ingredients} />
  //         <BuildControls
  //           ingredientAdded={this.addIngredientHandler}
  //           ingredientRemoved={this.removeIngredientHandler}
  //           disabled={disabledInfo}
  //           price={this.state.totalPrice}
  //         />
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
  // -----BuildControls-----
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
  //     <p>
  //       Currrent Price: <strong>{props.price.toFixed(2)}</strong>
  //     </p>
  //     {controls.map(ctrl => (
  //       <BuildControl
  //         key={ctrl.label}
  //         label={ctrl.type}
  //         added={() => props.ingredientAdded(ctrl.type)}
  //         removed={() => props.ingredientRemoved(ctrl.type)}
  //         disabled={props.disabled[ctrl.type]}
  //       />
  //     ))}
  //   </div>
  // );
  // export default buildControls;
  // -----BuildControl-----
  //   import React from "react";
  // import classes from "./BuildControl.module.css";
  // const buildControl = props => (
  //   <div className={classes.BuildControl}>
  //     <div className={classes.Label}>{props.label}</div>
  //     <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>
  //       Less
  //     </button>
  //     <button className={classes.More} onClick={props.added}>
  //       More
  //     </button>
  //   </div>
  // );
  // export default buildControl;
};

const solutionSeven = {
  // ---CSS add to build Controls ---
  // .OrderButton {
  //     background-color: #DAD735;
  //     outline: none;
  //     cursor: pointer;
  //     border: 1px solid #966909;
  //     color: #966909;
  //     font-family: inherit;
  //     font-size: 1.2em;
  //     padding: 15px 30px;
  //     box-shadow: 2px 2px 2px #966909;
  // }
  // .OrderButton:hover, .OrderButton:active {
  //     background-color: #A0DB41;
  //     border: 1px solid #966909;
  //     color: #966909;
  // }
  // .OrderButton:disabled {
  //     background-color: #C7C6C6;
  //     cursor: not-allowed;
  //     border: 1px solid #ccc;
  //     color: #888888;
  // }
  // .OrderButton:not(:disabled) {
  //     animation: enable 0.3s linear;
  // }
  // @keyframes enable {
  //     0% {
  //         transform: scale(1);
  //     }
  //     60% {
  //         transform: scale(1.1);
  //     }
  //     100% {
  //         transform: scale(1);
  //     }
  // }
  // ---BurgerBUilder---
  //   import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // import BuildControls from "../../components/Burger/BuildControls/BuildControls";
  // const INGREDIENT_PRICES = {
  //   salad: 0.5,
  //   cheese: 0.4,
  //   meat: 1.3,
  //   bacon: 0.7
  // };
  // class BurgerBuilder extends Component {
  //   state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 1,
  //       cheese: 2,
  //       meat: 1
  //     },
  //     totalPrice: 4,
  //     purchaseable: false
  //   };
  //   updatePurchaseState = ingredients => {
  //     const sum = Object.keys(ingredients)
  //       .map(igKey => {
  //         return ingredients[igKey];
  //       })
  //       .reduce((sum, element) => {
  //         return sum + element;
  //       }, 0);
  //     this.setState({ purchaseable: sum > 0 });
  //   };
  //   addIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     const updatedCount = oldCount + 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceAddition = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice + priceAddition;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   removeIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     if (oldCount <= 0) {
  //       return;
  //     }
  //     const updatedCount = oldCount - 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceDeduction = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice - priceDeduction;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   render() {
  //     const disabledInfo = {
  //       ...this.state.ingredients
  //     };
  //     for (let key in disabledInfo) {
  //       disabledInfo[key] = disabledInfo[key] <= 0;
  //     }
  //     return (
  //       <Auxillary>
  //         <Burger ingredients={this.state.ingredients} />
  //         <BuildControls
  //           ingredientAdded={this.addIngredientHandler}
  //           ingredientRemoved={this.removeIngredientHandler}
  //           disabled={disabledInfo}
  //           price={this.state.totalPrice}
  //           purchaseable={this.state.purchaseable}
  //         />
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
  // -- BuildControls --
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
  //     <p>
  //       Currrent Price: <strong>{props.price.toFixed(2)}</strong>
  //     </p>
  //     {controls.map(ctrl => (
  //       <BuildControl
  //         key={ctrl.label}
  //         label={ctrl.type}
  //         added={() => props.ingredientAdded(ctrl.type)}
  //         removed={() => props.ingredientRemoved(ctrl.type)}
  //         disabled={props.disabled[ctrl.type]}
  //       />
  //     ))}
  //     <button className={classes.OrderButton} disabled={!props.purchaseable}>
  //       Order Now
  //     </button>
  //   </div>
  // );
  // export default buildControls;
};

const solutionEight = {
  // --- Modal.module.css ---
  //   .Modal {
  //   position: fixed;
  //   z-index: 500;
  //   background-color: white;
  //   width: 70%;
  //   border: 1px solid #ccc;
  //   box-shadow: 1px 1px 1px black;
  //   padding: 16px;
  //   left: 15%;
  //   top: 30%;
  //   box-sizing: border-box;
  //   transition: all 0.3s ease-out;
  // }
  // @media (min-width: 600px) {
  //   .Modal {
  //     width: 500px;
  //     left: calc(50% - 250px);
  //   }
  // }
  // --- Modal.js ---
  //   import React from "react";
  // import classes from "./Modal.module.css";
  // const Modal = props => <div className={classes.Modal}>{props.children}</div>;
  // export default Modal;
  // BurgerBuilder.js ---
  //   import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // import BuildControls from "../../components/Burger/BuildControls/BuildControls";
  // import Modal from "../../components/UI/Modal/Modal";
  // import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
  // const INGREDIENT_PRICES = {
  //   salad: 0.5,
  //   cheese: 0.4,
  //   meat: 1.3,
  //   bacon: 0.7
  // };
  // class BurgerBuilder extends Component {
  //   state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 1,
  //       cheese: 2,
  //       meat: 1
  //     },
  //     totalPrice: 4,
  //     purchaseable: false
  //   };
  //   updatePurchaseState = ingredients => {
  //     const sum = Object.keys(ingredients)
  //       .map(igKey => {
  //         return ingredients[igKey];
  //       })
  //       .reduce((sum, element) => {
  //         return sum + element;
  //       }, 0);
  //     this.setState({ purchaseable: sum > 0 });
  //   };
  //   addIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     const updatedCount = oldCount + 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceAddition = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice + priceAddition;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   removeIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     if (oldCount <= 0) {
  //       return;
  //     }
  //     const updatedCount = oldCount - 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceDeduction = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice - priceDeduction;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   render() {
  //     const disabledInfo = {
  //       ...this.state.ingredients
  //     };
  //     for (let key in disabledInfo) {
  //       disabledInfo[key] = disabledInfo[key] <= 0;
  //     }
  //     return (
  //       <Auxillary>
  //         <Modal>
  //           <OrderSummary ingredients={this.state.ingredients} />
  //         </Modal>
  //         <Burger ingredients={this.state.ingredients} />
  //         <BuildControls
  //           ingredientAdded={this.addIngredientHandler}
  //           ingredientRemoved={this.removeIngredientHandler}
  //           disabled={disabledInfo}
  //           price={this.state.totalPrice}
  //           purchaseable={this.state.purchaseable}
  //         />
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
  // --- OrderSummary ---
  //   import React from "react";
  // import Auxillary from "../../../hoc/Auxillary";
  // const OrderSummary = props => {
  //   const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
  //     return (
  //       <li key={igKey}>
  //         <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {props.ingredients[igKey]}
  //       </li>
  //     );
  //   });
  //   return (
  //     <Auxillary>
  //       <h3>Your Order</h3>
  //       <p>A delicious burger with the following ingredients:</p>
  //       <ul>{ingredientSummary}</ul>
  //       <p>Continue to Checkout?</p>
  //     </Auxillary>
  //   );
  // };
  // export default OrderSummary;
};

const solutionNine = {
  //  --- modal.js ---
  //   import React from "react";
  // import classes from "./Modal.module.css";
  // import Auxillary from "../../../hoc/Auxillary";
  // import Backdrop from "../Backdrop/Backdrop";
  // const Modal = props => (
  //   <Auxillary>
  //     <Backdrop show={props.show} clicked={props.modalClosed} />
  //     <div
  //       className={classes.Modal}
  //       style={{ transform: props.show ? "translateY(0)" : "translateY(-100vh)", opacity: props.show ? "1" : "0" }}
  //     >
  //       {props.children}
  //     </div>
  //   </Auxillary>
  // );
  // export default Modal;
  //  --- Backdrop.js ---
  //   import React from "react";
  // import classes from "./Backdrop.module.css";
  // const Backdrop = props => (props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null);
  // export default Backdrop;
  // --- BurgerBuilder.js ---
  //   import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // import BuildControls from "../../components/Burger/BuildControls/BuildControls";
  // import Modal from "../../components/UI/Modal/Modal";
  // import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
  // const INGREDIENT_PRICES = {
  //   salad: 0.5,
  //   cheese: 0.4,
  //   meat: 1.3,
  //   bacon: 0.7
  // };
  // class BurgerBuilder extends Component {
  //   state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 1,
  //       cheese: 2,
  //       meat: 1
  //     },
  //     totalPrice: 4,
  //     purchaseable: false,
  //     purchasing: false
  //   };
  //   updatePurchaseState = ingredients => {
  //     const sum = Object.keys(ingredients)
  //       .map(igKey => {
  //         return ingredients[igKey];
  //       })
  //       .reduce((sum, element) => {
  //         return sum + element;
  //       }, 0);
  //     this.setState({ purchaseable: sum > 0 });
  //   };
  //   addIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     const updatedCount = oldCount + 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceAddition = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice + priceAddition;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   removeIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     if (oldCount <= 0) {
  //       return;
  //     }
  //     const updatedCount = oldCount - 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceDeduction = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice - priceDeduction;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   purchaseHandler = () => {
  //     this.setState({ purchasing: true });
  //   };
  //   purchaseCancelHandler = () => {
  //     this.setState({ purchasing: false });
  //   };
  //   render() {
  //     const disabledInfo = {
  //       ...this.state.ingredients
  //     };
  //     for (let key in disabledInfo) {
  //       disabledInfo[key] = disabledInfo[key] <= 0;
  //     }
  //     return (
  //       <Auxillary>
  //         <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
  //           <OrderSummary ingredients={this.state.ingredients} />
  //         </Modal>
  //         <Burger ingredients={this.state.ingredients} />
  //         <BuildControls
  //           ingredientAdded={this.addIngredientHandler}
  //           ingredientRemoved={this.removeIngredientHandler}
  //           disabled={disabledInfo}
  //           price={this.state.totalPrice}
  //           purchaseable={this.state.purchaseable}
  //           ordered={this.purchaseHandler}
  //         />
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
  // --- buildControls.js----
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
  //     <p>
  //       Currrent Price: <strong>{props.price.toFixed(2)}</strong>
  //     </p>
  //     {controls.map(ctrl => (
  //       <BuildControl
  //         key={ctrl.label}
  //         label={ctrl.type}
  //         added={() => props.ingredientAdded(ctrl.type)}
  //         removed={() => props.ingredientRemoved(ctrl.type)}
  //         disabled={props.disabled[ctrl.type]}
  //       />
  //     ))}
  //     <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>
  //       Order Now
  //     </button>
  //   </div>
  // );
  // export default buildControls;
  // --- Backdrop.module.css
  //   .Backdrop {
  //   width: 100%;
  //   height: 100%;
  //   position: fixed;
  //   z-index: 100;
  //   left: 0;
  //   top: 0;
  //   background-color: rgba(0, 0, 0, 0.5);
  // }
};

const solutionTen = {
  // --- Button.js ---
  //   import React from "react";
  // import classes from "./Button.module.css";
  // const Button = props => (
  //   <button className={[classes.Button, classes[props.btnType]].join(" ")} onClick={props.clicked}>
  //     {props.children}
  //   </button>
  // );
  // export default Button;
  //  --- OrderSummary ---
  // import React from "react";
  // import Auxillary from "../../../hoc/Auxillary";
  // import Button from "../../UI/Button/Button";
  // const OrderSummary = props => {
  //   const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
  //     return (
  //       <li key={igKey}>
  //         <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {props.ingredients[igKey]}
  //       </li>
  //     );
  //   });
  //   return (
  //     <Auxillary>
  //       <h3>Your Order</h3>
  //       <p>A delicious burger with the following ingredients:</p>
  //       <ul>{ingredientSummary}</ul>
  //       <p>Continue to Checkout?</p>
  //       <Button btnType="Danger" clicked={props.purchaseCanceled}>
  //         CANCEL
  //       </Button>
  //       <Button btnType="Success" clicked={props.purchaseContinued}>
  //         CONTINUE
  //       </Button>
  //     </Auxillary>
  //   );
  // };
  // export default OrderSummary;
  //  --- BurgerBuilder ---
  //   import React, { Component } from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import Burger from "../../components/Burger/Burger";
  // import BuildControls from "../../components/Burger/BuildControls/BuildControls";
  // import Modal from "../../components/UI/Modal/Modal";
  // import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
  // const INGREDIENT_PRICES = {
  //   salad: 0.5,
  //   cheese: 0.4,
  //   meat: 1.3,
  //   bacon: 0.7
  // };
  // class BurgerBuilder extends Component {
  //   state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 1,
  //       cheese: 2,
  //       meat: 1
  //     },
  //     totalPrice: 4,
  //     purchaseable: false,
  //     purchasing: false
  //   };
  //   updatePurchaseState = ingredients => {
  //     const sum = Object.keys(ingredients)
  //       .map(igKey => {
  //         return ingredients[igKey];
  //       })
  //       .reduce((sum, element) => {
  //         return sum + element;
  //       }, 0);
  //     this.setState({ purchaseable: sum > 0 });
  //   };
  //   addIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     const updatedCount = oldCount + 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceAddition = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice + priceAddition;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   removeIngredientHandler = type => {
  //     const oldCount = this.state.ingredients[type];
  //     if (oldCount <= 0) {
  //       return;
  //     }
  //     const updatedCount = oldCount - 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     updatedIngredients[type] = updatedCount;
  //     const priceDeduction = INGREDIENT_PRICES[type];
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice - priceDeduction;
  //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //     this.updatePurchaseState(updatedIngredients);
  //   };
  //   purchaseHandler = () => {
  //     this.setState({ purchasing: true });
  //   };
  //   purchaseCancelHandler = () => {
  //     this.setState({ purchasing: false });
  //   };
  //   purchaseContinueHandler = () => {
  //     alert("You continue!");
  //   };
  //   render() {
  //     const disabledInfo = {
  //       ...this.state.ingredients
  //     };
  //     for (let key in disabledInfo) {
  //       disabledInfo[key] = disabledInfo[key] <= 0;
  //     }
  //     return (
  //       <Auxillary>
  //         <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
  //           <OrderSummary
  //             ingredients={this.state.ingredients}
  //             purchaseCanceled={this.purchaseCancelHandler}
  //             purchaseContinued={this.purchaseContinueHandler}
  //           />
  //         </Modal>
  //         <Burger ingredients={this.state.ingredients} />
  //         <BuildControls
  //           ingredientAdded={this.addIngredientHandler}
  //           ingredientRemoved={this.removeIngredientHandler}
  //           disabled={disabledInfo}
  //           price={this.state.totalPrice}
  //           purchaseable={this.state.purchaseable}
  //           ordered={this.purchaseHandler}
  //         />
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default BurgerBuilder;
};

const solutionEleven = {
  // --- Toolbar.js ---
  //   import React from "react";
  // import classes from "./Toolbar.module.css";
  // import Logo from "../../Logo/Logo";
  // const Toolbar = props => {
  //   return (
  //     <header className={classes.Toolbar}>
  //       <div>MENU</div>
  //       <Logo />
  //       <nav>...</nav>
  //     </header>
  //   );
  // };
  // export default Toolbar;
  // --- Logo.js ---
  //   import React from "react";
  // import burgerLogo from "../assets/images/burger-logo.png";
  // import classes from "./Logo.module.css";
  // const Logo = props => (
  //   <div className={classes.Logo}>
  //     <img src={burgerLogo} alt="MyBurger" />
  //   </div>
  // );
  // export default Logo;
  // --- Layout.js ---
  //   import React from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import classes from "./Layout.module.css";
  // import Toolbar from "../Navigation/Toolbar/Toolbar";
  // const layout = props => (
  //   <Auxillary>
  //     <Toolbar />
  //     <main className={classes.Content}>{props.children}</main>
  //   </Auxillary>
  // );
  // export default layout;
  // --- OrderSummary ---
  //   <ul>{ingredientSummary}</ul>
  // <p>
  //   <strong>Total Price: ${props.price.toFixed(2)}</strong>
  // </p>
  // <p>Continue to Checkout?</p>
  // --- BurgerBuilder ---
  //   <OrderSummary
  //   ingredients={this.state.ingredients}
  //   purchaseCanceled={this.purchaseCancelHandler}
  //   purchaseContinued={this.purchaseContinueHandler}
  //   price={this.state.totalPrice}
  // />
};

const solutionTweleve = {
  // ---NavigationsItems.js ---
  //   import React from "react";
  // import classes from "./NavigationItems.module.css";
  // import NavigationItem from "./NavigationItem/NavigationItem";
  // const NavigationItems = () => (
  //   <ul className={classes.NavigationItems}>
  //     <NavigationItem link="/" active>
  //       BurgerBuilder
  //     </NavigationItem>
  //     <NavigationItem link="/">Checkout</NavigationItem>
  //   </ul>
  // );
  // export default NavigationItems;
  // --- NavigationItem.js ---
  //   import React from "react";
  // import classes from "./NavigationItem.module.css";
  // const NavigationItem = props => (
  //   <li className={classes.NavigationItem}>
  //     <a href={props.link} className={props.active ? classes.active : null}>
  //       {props.children}
  //     </a>
  //   </li>
  // );
  // export default NavigationItem;
  // --- Toolbarjs ---
  //   import React from "react";
  // import classes from "./Toolbar.module.css";
  // import Logo from "../../Logo/Logo";
  // import NavigationItems from "../NavigationItems/NavigationItems";
  // const Toolbar = props => {
  //   return (
  //     <header className={classes.Toolbar}>
  //       <div>MENU</div>
  //       <div className={classes.Logo}>
  //         <Logo />
  //       </div>
  //       <nav>
  //         <NavigationItems />
  //       </nav>
  //     </header>
  //   );
  // };
  // export default Toolbar;
  // --- SideDraw ---
  //   import React from "react";
  // import Logo from "../../Logo/Logo";
  // import NavigationItems from "../NavigationItems/NavigationItems";
  // import classes from "./SideDraw.module.css";
  // const SideDraw = props => {
  //   return (
  //     <div className={classes.SideDraw}>
  //       <div className={classes.Logo}>
  //         <Logo />
  //       </div>
  //       <nav>
  //         <NavigationItems />
  //       </nav>
  //     </div>
  //   );
  // };
  // export default SideDraw;
  //   // --- Layout ---
  //   import React from "react";
  // import Auxillary from "../../hoc/Auxillary";
  // import classes from "./Layout.module.css";
  // import Toolbar from "../Navigation/Toolbar/Toolbar";
  // import SideDraw from "../Navigation/SideDraw/SideDraw";
  // const layout = props => (
  //   <Auxillary>
  //     <Toolbar />
  //     <SideDraw />
  //     <main className={classes.Content}>{props.children}</main>
  //   </Auxillary>
  // );
  // export default layout;
};

const solutionThirteen = {
  // sideDraw
  //   const SideDraw = (props) => {
  //   let attachedClasses = [classes.SideDraw, classes.Close];
  //   if (props.open) {
  //     attachedClasses = [classes.SideDraw, classes.Open];
  //   }
  //   return (
  //     <Auxillary>
  //       <Backdrop show={props.open} clicked={props.closed} />
  //       <div className={attachedClasses.join(' ')}>
  //         <div className={classes.Logo}>
  //           <Logo />
  //         </div>
  //         <nav>
  //           <NavigationItems />
  //         </nav>
  //       </div>
  //     </Auxillary>
  //   );
  // };
  // Layout
  // import React, { Component } from 'react';
  // import Auxillary from '../../hoc/Auxillary';
  // import classes from './Layout.module.css';
  // import Toolbar from '../Navigation/Toolbar/Toolbar';
  // import SideDraw from '../Navigation/SideDraw/SideDraw';
  // class Layout extends Component {
  //   state = {
  //     showSideDraw: false,
  //   };
  //   sideDrawClosedHandler = () => {
  //     this.setState({ showSideDraw: false });
  //   };
  //   sideDrawerToggleHandler = () => {
  //     this.setState((prevState) => {
  //       return { showSideDraw: !prevState.showSideDraw };
  //     });
  //   };
  //   render() {
  //     return (
  //       <Auxillary>
  //         <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
  //         <SideDraw open={this.state.showSideDraw} closed={this.sideDrawClosedHandler} />
  //         <main className={classes.Content}>{this.props.children}</main>
  //       </Auxillary>
  //     );
  //   }
  // }
  // export default Layout;
  // Toolbar
  //   const Toolbar = (props) => {
  //   return (
  //     <header className={classes.Toolbar}>
  //       <DrawerToggle clicked={props.drawerToggleClicked} />
  //       <div className={classes.Logo}>
  //         <Logo />
  //       </div>
  //       <nav className={classes.DesktopOnly}>
  //         <NavigationItems />
  //       </nav>
  //     </header>
  //   );
  // };
};
