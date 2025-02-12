import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Ingredient = 'bread' | 'cheese' | 'salami' | 'tomato';

export interface InitialState {
    ingredients: ('bread' | 'cheese' | 'salami' | 'tomato')[]
}

const initialState: InitialState = {
    ingredients: []
}

const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        add(state, action: PayloadAction<Ingredient>) {
            state.ingredients.push(action.payload);
        },
        clear(state) {
            state.ingredients = [];
        }
    }
})
export const { add, clear } = sandwichSlice.actions;
export default sandwichSlice.reducer;