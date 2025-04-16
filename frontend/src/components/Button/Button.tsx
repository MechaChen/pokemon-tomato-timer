import { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTime, setTimerId, setIsStart } from '../../redux/tomatoTimerSlice';
import * as Styled from './styles';
import { selectIsStart } from '../../redux/selectors';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
    const isStart = useSelector(selectIsStart);

    const dispatch = useDispatch();

    function countDown() {
        let timerId: any = setInterval(() => {
            dispatch(decrementTime(1));
        }, 1000);
        dispatch(setIsStart(true));
        dispatch(setTimerId(timerId));
    }

    return (
        <Styled.Container onClick={countDown} disabled={isStart}>
            {children}
        </Styled.Container>
    );
}

export default Button;
