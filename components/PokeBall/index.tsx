import { useTimerContext } from '@context/index';
import * as Styled from './styles';

function PokeBall() {
    const { isStart, time, initTime } = useTimerContext();

    const ballType = (function dependTimeToChangeBall() {
        switch (initTime) {
            case 30:
                return 'ultraball';
            case 20:
                return 'greatball';
            default:
                return '';
        }
    })();

    return (
        <Styled.Container className="PokeBall" isStart={isStart}>
            <div className={`poke-ball ${ballType}`}>
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
