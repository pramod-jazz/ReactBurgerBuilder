import React, { Component } from 'react';
import './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredients extends Component {

    render() {

        let ingredients = null;
        switch (this.props.type) {
            case ('bread-bottom'):

                ingredients = <div className="BreadBottom"></div>
                break;
            case ('bread-top'):
                ingredients = (<div className="BreadTop">
                    <div className="Seed1"></div>
                    <div className="Seed2"></div>
                </div>)
                break;
            case ('meat'):
                ingredients = <div className='Meat'>

                </div>

                break;
            case ('salad'):
                ingredients = <div className='Salad'>

                </div>
                break;
            case ('cheese'):
                ingredients = <div className='Cheese'>

                </div>
                break;
            case ('bacon'):
                ingredients = <div className='Bacon'>

                </div>
                break;
            default:
               ingredients =  null;
        }
        return ingredients;

    }

}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurgerIngredients;