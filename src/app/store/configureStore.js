import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

export const configureStore = (preloadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composeEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancer
    );

    return store;
}