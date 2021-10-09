import { createContext, useState, useContext } from 'react';

type TimerProviderProps = {
    children: JSX.Element | JSX.Element[];
};

type Value = {
    isStart: boolean;
    setIsStart: (isStart: boolean) => void;
};

const TimerContext = createContext({} as Value);

export function TimerProvider(props: TimerProviderProps) {
    const [isStart, setIsStart] = useState<boolean>(false);
    const value = {
        isStart,
        setIsStart,
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
