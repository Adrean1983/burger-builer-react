const stepOne = {
  // Write a switch statement in BurgerIngredient gets a future prop to be added, props.type. Switch on the ingredients from the CSS file and return a div
};

const stepTwo = {
  // Add prop type validation to App. npm install --save prop-types
  // switch (props.type) <-- Add validation so that this prop is validated.
  // Make the BurgerIngredient a class component.
  // Add the PropType validtion
};

const stepThree = {
  // Create a function component for Burger.js
  // Make a css file with a class .Burger with these properties:
  // width: 100%;
  // margin: auto;
  // height: 250px;
  // overflow: scroll;
  // text-align: center;
  // font-weight: bold;
  // font-size: 1.2rem;
  // Make media queries:
  // min-width: 500px and max-height: 400px
  // min-width: 500px and min-height: 401px
  // min-width: 1000px and min-height: 700px
  // Display BurgerIngredients inside Burger. Need to hard code the type
  // Put Burger into BurgerBuilder
};

const stepFour = {
  // create state in burgerBuilder. Make an ingredients object with key value pairs. Pass the ingredients to the Burger component
  // Create a const that stores result of Object.keys function. Need to map over the props and then map over the properties.
  // If the ingredients are empty it should disply text Please add ingredients between the burger buns. Need to do a reduce function and concat the arrays and then run a check on the ingredients.
};

const stepFive = {
  // make a folder BuildControls in the burger folder. Make a function component called BuildControls.js
  // Make a css file BuildControls.module.css and including these styles.
  // width: 100%;
  // background-color: #cf8f2e;
  // display: flex;
  // flex-flow: column;
  // align-items: center;
  // box-shadow: 0 2px 1px #ccc;
  // margin: auto;
  // padding: 10px 0;
  // Inside BuildControls folder make a BuildControl folder with a functional BuildControl.js and css file. Get css from stepFiveCss
  // in Buildcontrol.js display a div with {props.label} and two buttons Less and More. Pass the styles to the divs. Name should be obvious.
  // Make an array called controls of the ingredients in BuildControl.js, the key is label for the ingredient, and type is the ingredient.
  // Map through each of the controls. add a buildcontrol for each. Set a key and and a label that you pass as props
  // Insert BuildControls in BurgerBuilder
};

const stepFiveCss = {
  //   .BuildControl {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   margin: 5px 0;
  // }
  // .BuildControl button {
  //   display: block;
  //   font: inherit;
  //   padding: 5px;
  //   margin: 0 5px;
  //   width: 80px;
  //   border: 1px solid #aa6817;
  //   cursor: pointer;
  //   outline: none;
  // }
  // .BuildControl button:disabled {
  //   background-color: #ac9980;
  //   border: 1px solid #7e7365;
  //   color: #ccc;
  //   cursor: default;
  // }
  // .BuildControl button:hover:disabled {
  //   background-color: #ac9980;
  //   color: #ccc;
  //   cursor: not-allowed;
  // }
  // .Label {
  //   padding: 10px;
  //   font-weight: bold;
  //   width: 80px;
  // }
  // .BuildControl .Less {
  //   background-color: #d39952;
  //   color: white;
  // }
  // .BuildControl .More {
  //   background-color: #8f5e1e;
  //   color: white;
  // }
  // .BuildControl .Less:hover,
  // .BuildControl .Less:active {
  //   background-color: #daa972;
  //   color: white;
  // }
  // .BuildControl .More:hover,
  // .BuildControl .More:active {
  //   background-color: #99703f;
  //   color: white;
  // }
};

const stepSix = {
  //  Make two functions in Burger Builder addIngredientHandler and removeIngredientHandler
  // In addIngredientHandler need to get
  // 1. the count of current type of ingreident in state. The type should be passed as a argument to the function
  // 2. update the count by 1
  // 3. take a copy of state.
  // 4. In the new copy of state save the updated count for the type
  // 5. Create a global variable called INGREDIENT_PRICES
  // salad: 0.5,
  // chesse: 0.4,
  // meat: 1.3,
  // bacon: 0.7
  // 6. Set totalPrice in the state variable and set it to 4. Make new variable that gets current totalPrice.
  // 7. make  new variable which grabs state price plus the priceaddtion
  // 8. SetState for price and ingredients
  // Pass a property called ingredientAdded to BuildControls which runs addIngredientHandler. Pass this property down to the individual build controller as added, this should pass the types down as well. Need to use () => function(parameter) to do this. In buildcontrol add this as an onClick attached to more. Should be able to see ingredients added with the more button now.
  // In removeIngredientHandler copy the code from addIngredientHandler except minus the count and price deduction.
  // Pass the function down to buildcontrols and buildcontrol in the same way as addIngredientHandler
  // Need to make a check is see if the ingredients are 0. In which case return nothing.
  // To disable the button to delete ingredients if none are present. Create a const called disabledInfo in BurgrBuilder that takes a copy of the ingredients state. Using for a for in loop, loop through this new variable and set the key to be to false if <= 0
  // Send the disabledInfo variable down to buildcontrols as disabled. Set the less button property disabled the attribute passed down.
  // To display total price. Send a price property down to buildcontrols. Display the total price above the controls in a strong p tag. use to Fixed.
};

const stepSeven = {
  // Add an Order Now button in Build Controls. Add CSS from file for the button.
  // Add a purchaseable value in BurgerBuilder set to false.
  // Create a function in BurgerBuilder called updatePurchaseState. Need to look at the ingredients (the updated ingredients from the add/removeIngredientsHandler functions) with Object.keys and use a map and a reduce chained function to get the sum of ingredients. Set the state with 'sum > 0' this returns true or false. Pass the property down to build controls.
  // In the order now button use to property to disable or not disable the button
  // Need to call the updatePurchase state function in the add and remove ingredient handlers.
};

const stepEight = {
  // make a UI folder in components. Make a Modal folder and a Modal.js(function component receives props) Modal.module.css within. Make a Backdrop folder in the UI folder and a BackDrop.js file within.
  // modal.js is functional file. The css is provided. Use modal class on main div. Bring Modal into BurgerBuilder and render beneath Auxillary. It needs two tags, because it will wrap OrderSummary
  // Add a OrderSummary folder with OrderSummary.js (function component receives props) inside the Burger folder. Use an Auxillary wrapping component. Add h3 Your order. and a <p>A delicious burger with the following ingredients: </p> - Then add a empty <ul> and a <p>Continue to Checkout?
  // Get the ingredients from props. and using the map function get the key and the value and display an li for each. Use a key for each li to avoid iterator error
  // Bring OrderSummary into BurgerBuilder between the Modal tags.
};

const stepNine = {
  // Showing the order modal and closing the order modal
  // Add a new state property called purchasing and set it to false
  // Add a method that toggles this new property. Pass it to build controls on the order button and use an onClick function
  // Create a property on the Modal in burger builder called show. Inside Modal.js use a ternary to display or not display these properties. transform: "translateY(0)" or "translateY(-100vh)" opacity:  "1" or "0"
  // In Backdrop.js make it functional. It recevies props.
  // display a div or null based on if the show prop is true or not
  // Add a backdrop css file and include the following styles. Use this file in the div in backdrop
  // .Backdrop {
  // width: 100%;
  // height: 100%;
  // position: fixed;
  // z-index: 100;
  // left: 0;
  // top: 0;
  // background-color: rgba(0, 0, 0, 0.5);
  // }
  // Need to bring Backdrop into the modal file. Wrap the current div and the backdrop in an Auxillary tag. Pass down the show.
  // add a clicked prop to the Backdrop. Its passed down from modal.js as modalClosed. It calls purchaseCancelHandler in BurgerBuilder.js. It changes the purchasing state.
};

const stepTen = {
  // Adding a custom Button
  // Add a cancel and continue button in Order Summary. Need to add a folder with a  Button.js in the UI folder. It's functional component.
  // need to add onClick with props.clicked and display props.children. For the className need to import the css and pass down an array of the Button as the first index then dynamically show the next one as btnType. Add a join(" ") to make it strings
  // Import the Button.js to the orderSummary. add the btnType and clicked to the custom button. Clicked for cancel and continue will be passed down from BurgerBuilder
  // pass purchaseCancelHandler funciton as the cancel prop and create a function called purchaseContinueHandler that just alerts ('you continue') as the continue prop.
};

const stepEleven = {
  // Add total to ordersummary
  // Display Total Price: to the ordersummary. Pass it down from BurgerBuilder. Use toFixed(2)
  // Add a Toolbar
  // Add a Navigation in the components folder and inside add a toolbar folder and a toolbar.js
  // Make a function component with props. header tag a div with MENU a div with LOGO and a nav bar with ...
  // Make a css Toolbar file. Pass this to header.
  // Add the Toolbar to the Layout folder. Need to add the toolbar height to the existing height in the layout css folder.
  // Add Logo
  // In components folder add a Logo folder with a Logo.js file. It's a functional component.
  // Import the burger logo image from the asset file. make a div with the img tag inside. Use css styles on div and src the image.
  // Add this component to the toolbar for the logo
};

const stepTwelve = {
  // Creating Navigation
  // Create a subfolder navigationItems in navigation folder and add a file called NavigationItems. It's a functional component that has a ul
  // Make a further sub folder called NavigationItem with a file of same name. It's a function component with a li that has an anchor tag
  // Make a NavigationsItems css file with the following.
  //   .NavigationItems {
  //   margin: 0;
  //   padding: 0;
  //   list-style: none;
  //   display: flex;
  //   align-items: center;
  //   height: 100%;
  // }
  // make a naviationItem css file too.
  //   .NavigationItem {
  //   margin: 0;
  //   box-sizing: border-box;
  //   display: flex;
  //   height: 100%;
  //   align-items: center;
  // }
  // .NavigationItem a {
  //   color: white;
  //   text-decoration: none;
  //   height: 100%;
  //   padding: 16px 10px;
  //   border-bottom: 4px solid transparent;
  //   box-sizing: border-box;
  //   display: block;
  // }
  // .NavigationItem a:hover,
  // .NavigationItem a:active,
  // .NavigationItem a.active {
  //   background-color: #8f5c2c;
  //   border-bottom: 4px solid #40a4c8;
  //   color: white;
  // }
  // import navigationItem to navigationItems. and display. Back in Navigtation item pass props props.link for Href. Then conditionally show the active class for the className props.active. In the anchor tag do props.children.
  // Nack in navigationItems make a link called Burger Builder and a Checkout.
  // Add the NavigationItems in the toolbar component.
  // Make a sidedraw folder and file in Navigation folder. It's a functional component that receives props
  // It show siplay the Logo component and inside a <nav> tag the NavigationItems component.
  // Make a SideDraw CSS file.
  // .SideDraw {
  //   position: fixed;
  //   width: 280px;
  //   max-width: 70%;
  //   height: 100%;
  //   left: 0;
  //   top: 0;
  //   z-index: 200;
  //   background-color: white;
  //   padding: 32px 16px;
  //   box-sizing: border-box;
  //   transition: transform 0.3s ease-out;
  // }
  // @media (min-width: 500px) {
  //   .SideDraw {
  //     display: none;
  //   }
  // }
  // .Open {
  //   transition: translateX(0);
  // }
  // .Close {
  //   transition: translateX(-100%);
  // }
  // Import the css file and giv it on the main <div className=""></div>
  // Import the Sidedraw in the Layout.js file and display underneath the Toolbar
  // The burger will be too big at this point.
  // Set the Css for the logo height to 100% in the css file.
  // Restrict the height in the Toolbar and the sidedraw
  // Wrap the Logo in a div inside the Toolbar and Sidedraw. Inside their respective css files create a logo css file and set the height to 11% for the Sidedraw and 80% for the Toolbar
  // --- Layout.js ---
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
  // --- Logo.module.css ---
  //   .Logo {
  //   background-color: white;
  //   padding: 8px;
  //   height: 100%;
  //   box-sizing: border-box;
  //   border-radius: 5px;
  // }
  // .Logo img {
  //   height: 100%;
  // }
};

const stepThirteen = {
  // A bunch of saved CSS
  // import backdrop to sidedraw put at top. Need to add Aux.
  // Conver the Layout js file to a class component.
  // add a method called sideDrawClosedHandler and state(showSideDraw) in layout.js. it should set the showSideDraw state. Pass this method to sideDraw
  // Set another property to sideDraw in layout js called open.
};
