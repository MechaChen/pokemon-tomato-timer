import { RootState } from './store';

export function selectTime(state: RootState) {
    return state.tomatoTimer.time;
}

export function selectInitTime(state: RootState) {
    return state.tomatoTimer.initTime;
}

export function selectIsStart(state: RootState) {
    return state.tomatoTimer.isStart;
}

export function selectTimerId(state: RootState) {
    return state.tomatoTimer.timerId;
}
