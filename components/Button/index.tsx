import { useTimerContext } from '@context/index';
import * as Styled from './styles';

function Button() {
    const { setIsStart } = useTimerContext();

    return <Styled.Container onClick={() => setIsStart(true)}>Be Focus!</Styled.Container>;
}

export default Button;
