import { combineReducers, createStore, compose } from 'redux'
import { isLoadingReducer, locationReducer, popularityReducer, restaurantsReducer } from 'reducers/reducers'

export var configure = (initialState = {}) => {
  const reducer = combineReducers({
    isLoading: isLoadingReducer,
    location: locationReducer,
    popularity: popularityReducer,
    restaurants: restaurantsReducer,
  })

  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ))

  return store
}