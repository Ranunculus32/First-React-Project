const Clicker = (rand) => {
  const [num, setNum] = useState(1);

  const genRandom = () => {
    rand = Math.floor(Math.random() * 10) + 1;
    setNum(rand);
  };
  return (
    <div>
      <p className="clicker-p"> Click me!</p>
      {num === 7 ? (
        <p> You won!</p>
      ) : (
        <button onClick={genRandom}> Random Number</button>
      )}
    </div>
  );
};
export default Clicker;
