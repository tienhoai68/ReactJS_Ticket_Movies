import data from "../../data/listChair.json";

const DEFAULT_STATE = {
    listChair: data,
};
export const bookTickets = (state = DEFAULT_STATE, action) => {
    // console.log(state.listChair);
    console.log(action);
    switch (action.type) {
        // case "DAT_GHE": {
        //         const listChair = state.listChair.map((element) => {
        //             return element.danhSachGhe.map((item) => {
        //                 return item;
        //             })
        //         });
        //     // console.log(listChair);
        //     // const data = JSON.parse(JSON.stringify(listChair));
        //     const index = listChair.findIndex((element) => console.log(element.soGhe))
        //     // const index = data.findIndex((element) =>
        //     // console.log(element));
        //     data[index].dangChon = !data[index].dangChon;
        //     state.listChair = data;
        //     break;
        // }
    }
    return { ...state };
}