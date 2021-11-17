import { combineReducers } from "redux";
import listReducer from "./list";

const reducer = combineReducers({
    list: listReducer,
});

export default reducer;