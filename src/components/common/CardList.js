import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IngredientCard from './IngredientCard'
import CocktailCard from './CocktailCard'

class IngredientCardList extends Component {
  render() {
    let cards = null;
    if (this.props.cardData.length > 0) {
      switch (this.props.cardType) {
        case 'ingredient':
          cards = this.props.cardData.map((data) => {
            if (data.selected) {
              return (
                <IngredientCard
                  cardData = {data}
                  key = {data[this.props.keyName]}
                  removeCard = {this.props.removeCard}
                />
              )
            }
          });
          break;
        case 'cocktail':
          cards = this.props.cardData.map((data) =>
            <CocktailCard
              cardData = {data}
              key = {data[this.props.keyName]}
              ingredients = {this.props.ingredients}
              cocktailClick = {this.props.cocktailClick}
            />
          );
          break;
        default:
          cards = <p>
            Unrecognised Card Type
          </p>
      }
    } else {
      cards = (<div className="empty-data-container">
        <h3>
          {this.props.emptyDataTitle}
        </h3>
        <p>
          {this.props.emptyDataDesc}
        </p>
      </div>);
    }

    return (
      <div className="scrollable">
        {cards}
      </div>
    );
  }
}

IngredientCardList.propTypes = {
  cardData: PropTypes.array.isRequired,
  cardType: PropTypes.oneOf(['ingredient', 'cocktail']),
  keyName: PropTypes.string.isRequired,
  removeCard: PropTypes.func,
  ingredients: PropTypes.array,
  cocktailClick: PropTypes.func,
  emptyDataTitle: PropTypes.string.isRequired,
  emptyDataDesc: PropTypes.string.isRequired,
}

export default IngredientCardList;
