import { useTimerContext } from '@context/index';
import * as Styled from './styles';

function PokeBall() {
    const { isStart } = useTimerContext();

    return (
        <Styled.Container className="PokeBall" isStart={isStart}>
            <div className="poke-ball">
                <div className="border">
                    <div className="inner"></div>
                </div>
                <div className="ball">
                    <div className="extras"></div>
                    <div className="moar-extras"></div>
                    <div className="even-moar-extras"></div>
                    <div className="and-some-moar-extras"></div>
                    <div className="yikes-this-is-a-lot"></div>
                    <div className="plz-kill-me-now"></div>
                    <div className="oh-gawd-whyyy"></div>
                </div>
                {/* <div className="shadow"></div> */}
            </div>
        </Styled.Container>
    );
}

export default PokeBall;
