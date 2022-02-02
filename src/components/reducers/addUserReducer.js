import { ADD_USER } from "../actions/allActions";

const initialState = {
    user: {}
}

const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            console.log(state.user,"initialState");
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default addUserReducer;

