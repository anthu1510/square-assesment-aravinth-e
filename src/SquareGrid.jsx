const SquaresGrid = ({ size }) => {
  const squareStyles = {
    height: "100px",
    width: "100px",
    backgroundColor: "black",
    margin: "10px",
    padding: "0",
    display: "inline-block",
    boxSizing: "border-box",
    border: "1px solid black",
  };

  const rowStyles = {
    margin: "0",
    padding: "0",
  };

  const grid = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(<div key={`${i}-${j}`} style={squareStyles} />);
    }
    grid.push(
      <div key={i} style={rowStyles}>
        {row}
      </div>
    );
  }

  return <div>{grid}</div>;
};

export default SquaresGrid;
