import { createSlice } from "@reduxjs/toolkit";
import { randomColor } from "../utilities";

const countSlice = createSlice({
    name: "count",
    initialState: { ballonCount: 5, fuelWidth: 36, color: randomColor() },
    reducers: {
        decBalCount(state) {
            state.ballonCount && (state.ballonCount -= 1);
        },
        decFuelWidth(state) {
            state.fuelWidth && (state.fuelWidth -= 12);
        },
        reset(state) {
            state.ballonCount = 5;
            state.fuelWidth = 36;
            state.color = randomColor();
        }
    }
});

export const { decBalCount, decFuelWidth, reset } = countSlice.actions;

export default countSlice.reducer;