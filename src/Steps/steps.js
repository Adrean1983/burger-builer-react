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
