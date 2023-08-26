import data from "../../data/listChair.json";
import { DAT_GHE, PAYMENT } from "../types/datGheType";

const DEFAULT_STATE = {
    listChair: data,
    buyTickets: [],
};
export const bookTickets = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case DAT_GHE: {
            const { soGhe } = action.payload;
            const updatedListChair = state.listChair.map(item => {
                const currentChair = item.danhSachGhe.map(chair => {
                    if (chair.soGhe === soGhe) {
                        return {
                            ...chair,
                            dangChon: !chair.dangChon,
                        };
                    }
                    return chair;
                });
                return {
                    ...item,
                    danhSachGhe: currentChair,
                };
            });

            return {
                ...state,
                listChair: updatedListChair,
                buyTickets: updatedListChair,
            };
        };
        case PAYMENT: {
            const data = JSON.parse(JSON.stringify(state.listChair));
            data.map((element) => {
                element.danhSachGhe.map((listChair) => {
                    if (listChair.dangChon) {
                        listChair.daDat = !listChair.daDat;
                        listChair.dangChon = !listChair.dangChon;
                    };
                });

            });
            state.listChair = data;
            state.buyTickets = [];
            break;
        };
        default:
            return state;
    }
    return { ...state };
};