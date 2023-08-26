import { DAT_GHE, PAYMENT } from "../types/datGheType"

export const datGheAction = (data) => {
    return {
        type: DAT_GHE,
        payload: data,
    };
};
export const payment = (data) => {
    return {
        type: PAYMENT,
        payload: data,
    }
}