import _ from 'lodash';

export function validateIngredient(currentIngredients, ingredient) {
  if (
    !_.isUndefined(
      _.find(
        currentIngredients,
        {ingredientId: ingredient.ingredientId}
      )
    )
  ) {
    return ({
      searchError: true,
      searchErrorText: ingredient.name + " already exists in your supplies"
    });
  } else {
    return ({
      searchError: false,
      searchErrorText: ''
    })
  }
}