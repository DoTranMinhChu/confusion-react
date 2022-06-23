import { createStore } from "redux";
import { initialState, Reducer } from "./reducer";


export const configureStore = createStore(Reducer,initialState);