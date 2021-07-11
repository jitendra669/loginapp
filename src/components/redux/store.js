import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import user from "./reducers/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  user: user,
});

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk), composeWithDevTools())
  );
};

export default configureStore;
