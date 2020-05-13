import { createStore } from "redux";

const initialState = { users: [] };

function reducer(state, action) {
    switch (action.type) {
        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((x) => x.id !== action.payload),
            };
        case "CLEAR_USERS":
            return { ...state, users: [] };
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    initialState,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;