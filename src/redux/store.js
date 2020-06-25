import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './reducers/userReducer'
import dataReducer from './reducers/dataReducer'
import uiReducer from './reducers/uiReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { createLogger } from 'redux-logger';

/*const logger = createLogger({
    /!* https://github.com/evgenyrodionov/redux-logger *!/
    collapsed: true,
    diff: true
});*/

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    ui: uiReducer
})

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
        //applyMiddleware(...middleware, logger)
        applyMiddleware(...middleware)
    )
)

export default store;
