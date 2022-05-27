import Square from '../Square/Square';
import './Board.css';

const Board = props => {
  const GameSquare = ({ index }) => (
    <Square
      value={props.squares[index]}
      onClick={() => props.onClick(index)}
    />
  );

  return (
    <div>
      <div className="board-row">
        <GameSquare index={0} />
        <GameSquare index={1} />
        <GameSquare index={2} />
      </div>
      <div className="board-row">
        <GameSquare index={3} />
        <GameSquare index={4} />
        <GameSquare index={5} />
      </div>
      <div className="board-row">
        <GameSquare index={6} />
        <GameSquare index={7} />
        <GameSquare index={8} />
      </div>
    </div>
  );
};

export default Board;