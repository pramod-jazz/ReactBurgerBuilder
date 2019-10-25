import React, { Component } from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
import './Burger.css'

class Burger extends Component{


render(){
    return(
       <div className="Burger">
           <BurgerIngredient  type="bread-top"></BurgerIngredient>
           <BurgerIngredient  type="cheese"></BurgerIngredient>
           <BurgerIngredient  type="meat"></BurgerIngredient>
           <BurgerIngredient  type="bread-bottom"></BurgerIngredient>
           </div>
         
    )
}

}

export default Burger;