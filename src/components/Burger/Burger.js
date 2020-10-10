import React from 'react';
import BurgerBuilder from '../../containors/BurgerBuilder/BurgerBuilder';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {
    return (
        <div className={classes.Burger}>

<BurgerIngredient type="bread-top"/>
<BurgerIngredient type="bread-bottom"/>
<BurgerIngredient type="cheese"/>
<BurgerIngredient type="meat"/>
<BurgerIngredient type="bread-bottom"/>

        </div>
    );

};
export default burger;