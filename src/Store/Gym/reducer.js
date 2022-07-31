import { logState } from "./state"
import { SET_PRICE_LIST, SET_SPA, SET_SPA_INFO } from "./types"

export const logReducer = (state = logState, option) => {
    switch (option.type) {
        case SET_SPA:
            state.spa = option.payload
            break
        case SET_PRICE_LIST:
            state.priceList = option.payload
            break  
        case SET_SPA_INFO:
            state.spaInformation = option.payload
            break    
        default:
            break
    }
    return { ...state }
}