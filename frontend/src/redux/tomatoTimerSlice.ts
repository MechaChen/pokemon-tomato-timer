import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface TomatoTimerState {
    isStart: boolean;
    initTime: number;
    time: number;
    timerId: number | undefined;
}

export enum TimeLevels {
    interval = 1,
    level1 = 2,
    level2 = 4,
    level3 = 6,
    maxLevel = 60,
    // level1 = 25,
    // level2 = 35,
    // level3 = 50,
    // maxLevel = 60,
}

// Define the initial state using that type
export const initialState: TomatoTimerState = {
    isStart: false,
    initTime: TimeLevels.level1,
    time: TimeLevels.level1,
    timerId: undefined,
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
        incrementTime: (state, { payload }: PayloadAction<number>) => {
            state.time += payload;
        },
        decrementTime: (state, { payload }: PayloadAction<number>) => {
            state.time -= payload;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setInitTime: (state, { payload }: PayloadAction<number>) => {
            state.initTime = payload;
        },
        decrementInitTime: (state, { payload }: PayloadAction<number>) => {
            state.initTime -= payload;
        },
        incrementInitTime: (state, { payload }: PayloadAction<number>) => {
            state.initTime += payload;
        },
        setTimerId: (state, { payload }: PayloadAction<number | undefined>) => {
            state.timerId = payload;
        },
    },
});

export const {
    setIsStart,
    setTime,
    setInitTime,
    incrementTime,
    decrementTime,
    incrementInitTime,
    decrementInitTime,
    setTimerId,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
