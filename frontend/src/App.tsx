import Timer from './components/Timer';
import PokeBall from './components/PokeBall';
import Button from './components/Button';
import Tag from './components/Tag';
import * as Styled from './pages/styles/home';
import { setIsStart } from './redux/tomatoTimerSlice';
import { useDispatch } from 'react-redux';

const RADIUS = 175;
const STROKE = 5;

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Styled.Quote>Pokémon, gotta catch 'em all</Styled.Quote>
      <Styled.Animation>
        <Styled.Circle LoopTime={5}>
            <circle r={RADIUS} cx={RADIUS + STROKE} cy={RADIUS + STROKE}></circle>
        </Styled.Circle>
        <PokeBall />
      </Styled.Animation>
      <Timer />
      <Tag />
      <Button onClick={() => dispatch(setIsStart(true))}>
        Start
      </Button>
    </>
  );
}

export default App
