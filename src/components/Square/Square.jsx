import './Square.css';

const Square = props => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;
