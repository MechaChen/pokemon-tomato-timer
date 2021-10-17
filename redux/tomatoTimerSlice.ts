import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface TomatoTimerState {
    isStart: boolean;
    initTime: number;
    time: number;
}

// Define the initial state using that type
const initialState: TomatoTimerState = {
    isStart: false,
    initTime: 10,
    time: 10,
};

export const counterSlice = createSlice({
    name: 'tomatoTimer',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setIsStart: (state, { payload }: PayloadAction<boolean>) => {
            state.isStart = payload;
        },
        setTime: (state, { payload }: PayloadAction<number>) => {
            state.time = payload;
        },
        decrementTime: (state) => {
            state.time -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setInitTime: (state, { payload }: PayloadAction<number>) => {
            state.initTime = payload;
        },
    },
});

export const { setIsStart, setTime, setInitTime, decrementTime } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
