import data from "../../data/listChair.json";
import { DAT_GHE } from "../types/datGheType";

const DEFAULT_STATE = {
    listChair: data,
};
// export const bookTickets = (state = DEFAULT_STATE, action) => {
//     // console.log(state.listChair);
//     // console.log(action);
//     switch (action.type) {
//         case DAT_GHE: {
//             const dataChair = state.listChair.map(item => item.danhSachGhe);
//             const itemIndex = dataChair.map((item) => {
//                 return item.findIndex((element) => {
//                     return element.soGhe === action.payload.soGhe;
//                 })
//             }).filter((item) => item !== -1);
//             // const index = state.listChair.map(item => item.danhSachGhe).findIndex(element => element.soGhe === action.payload.soGhe)
//             const data = JSON.parse(JSON.stringify(dataChair));

//             console.log(itemIndex);
//             // console.log(data[itemIndex][index]);

//             // console.log(data[index].dangChon);
//             // data[index].dangChon = !data[index].dangChon;
//             // console.log(data);
//             // state.listChair = data;
//             // const chair = state.listChair.fatlMap((element) => {
//             //     return element.danhSachGhe.map((item) => {
//             //         return item;
//             //     })
//             // });
//             // const index = chair.map((item, itemIndex) => {
//             //     const chairIndex = item.findIndex((element) => {
//             //         return element.soGhe === action.payload.soGhe;
//             //     })
//             //     return {chairIndex, itemIndex}
//             // }).filter((item) => item.chairIndex !== -1)
//             // const {chairIndex, itemIndex} = index[0];  
//             // // console.log(listChair);
//             // // const data = JSON.parse(JSON.stringify(chair));
//             // console.log(index);
//             // // data[index[0].index].danhSachGhe[index[0].chairIndex].dangChon = !data[index[0].index].danhSachGhe[index[0].chairIndex].dangChon;
//             // data[itemIndex].danhSachGhe[chairIndex].dangChon = !data[itemIndex].danhSachGhe[chairIndex].dangChon;
//             // console.log(data);
//             // state.listChair = !state.listChair[itemIndex].danhSachGhe[chairIndex].dangChon;
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