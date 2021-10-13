import { useTimerContext } from '@context/index';
import * as Styled from './styles';

function Button() {
    const { setIsStart, setTime } = useTimerContext();

    function countDown() {
        setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
        setIsStart(true);
    }

    return <Styled.Container onClick={countDown}>Be Focus!</Styled.Container>;
}

export default Button;
