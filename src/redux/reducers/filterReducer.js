import {VISIBILITY_FILTERS} from "../constants";
import {SET_FILTER} from "../actionTypes";

const initialState = VISIBILITY_FILTERS.ALL;
export default (state = initialState, action) => {
    if (action.type === SET_FILTER) {
        return action.payload.filter;
    } else {
        return state
    }
};
