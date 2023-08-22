import data from "../../data/listChair.json";
import { DAT_GHE } from "../types/datGheType";

const DEFAULT_STATE = {
    listChair: data,
};
// export const bookTickets = (state = DEFAULT_STATE, action) => {
//     switch (action.type) {
//         case DAT_GHE: {
//             const data = JSON.parse(JSON.stringify(state.listChair));
//             const dataChair = state.listChair.map((item) => {
//                 return item.danhSachGhe;
//             });
//             const index = state.listChair.findIndex(item => item.hang === action.hang);
//             const indexItem = dataChair.map((element) => {
//                 return element.findIndex((item) => {
//                     return item.soGhe === action.payload.soGhe;
//                 })
//             }).filter((item) => item !== -1)
//             console.log(data[index].danhSachGhe[indexItem])
//             data[index].danhSachGhe[indexItem].dangChon = !data[index].danhSachGhe[indexItem].dangChon;
//             state.listChair = data;
//             break;
//         }
//     }
//     return { ...state };
// }
export const bookTickets = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case DAT_GHE: {
            const { soGhe } = action.payload;
            const updatedListChair = state.listChair.map(item => {
                const updatedDanhSachGhe = item.danhSachGhe.map(ghe => {
                    if (ghe.soGhe === soGhe) {
                        return {
                            ...ghe,
                            dangChon: !ghe.dangChon,
                        };
                    }
                    return ghe;
                });
                return {
                    ...item,
                    danhSachGhe: updatedDanhSachGhe,
                };
            });

            return {
                ...state,
                listChair: updatedListChair,
            };
        }
        default:
            return state;
    }
};