import { createContext, useState, useContext } from 'react';

type TimerProviderProps = {
    children: JSX.Element | JSX.Element[];
};

type Value = {
    isStart: boolean;
    setIsStart: (isStart: boolean) => void;
    initTime: number;
    setInitTime: (time: number | ((time: number) => number)) => void;
    time: number;
    setTime: (time: number | ((time: number) => number)) => void;
};

const TimerContext = createContext({} as Value);

export function TimerProvider(props: TimerProviderProps) {
    const [isStart, setIsStart] = useState<boolean>(false);
    const [time, setTime] = useState<number>(10);
    const [initTime, setInitTime] = useState<number>(10);
    const value = {
        isStart,
        setIsStart,
        time,
        setTime,
        initTime,
        setInitTime,
    };

    return <TimerContext.Provider value={value} {...props} />;
}

export function useTimerContext() {
    const context = useContext(TimerContext);

    if (!context) {
        throw new Error('TimerContext must be used with TimerProvider !!');
    }

    return context;
}
