export default function Square({ value, onSquareClick, highlight}) {
  return (
    <button className="square" onClick={onSquareClick} style={{backgroundColor: highlight ? "skyblue" : "white"}}>
      {value}
    </button>
  );
}