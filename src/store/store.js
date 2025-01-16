import { combineReducers, createStore } from "redux";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
  getData: dataReducer,
});

export const store = createStore(rootReducer);

const a = store.getState()
console.log(a.getData.data);
