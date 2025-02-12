
import { ActionTheme } from "./themeAction"

export interface InitialState {
    value: 'light' | 'dark'
}

const initialState: InitialState = {
    value: 'light'
}

export default function themeReducer(state: InitialState = initialState, action: ActionTheme) {
    switch (action.type) {
        case "theme/change":
            return { ...state, value: action.payload ? 'light' : 'dark' };
        default:
            return state;
    }        
}
