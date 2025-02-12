import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
    value: boolean
}

const initialState: InitialState = {
    value: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeChange(state, action: PayloadAction<boolean>) {
            state.value = action.payload;
        }
    }
})
export const { themeChange } = themeSlice.actions;
export default themeSlice.reducer;