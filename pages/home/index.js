import {useEffect, useState} from "react";

const Home = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  const [disableButton, setDisableButton] = useState(false)


  useEffect(() => {
      if (playerOneScore === 5 || playerTwoScore === 5) {
        setDisableButton(true);
      }
  }, [playerTwoScore, playerOneScore]);

  const increaseCount = () => {
    setPlayerOneScore(playerOneScore + 1);
  }

  const increaseCountTwo = () => {
    setPlayerTwoScore(playerTwoScore + 1);
  }

  const reset = () => {
    setDisableButton(false);
    setPlayerOneScore(0)
    setPlayerTwoScore(0)
  }

  return (
    <div style={{display: 'flex'}}>
      <div>
        {playerOneScore}<br/>
        <button disabled={disableButton} onClick={() => increaseCount()}>Add my score 1</button>
      </div>
      <div style={{marginLeft: 30}}>
        {playerTwoScore}<br/>
        <button disabled={disableButton} onClick={() => increaseCountTwo()}>Add my score 2</button>
      </div>
      <br/>
      {disableButton && <div>
        Congrats you won
        <button onClick={() => reset()}>Reset</button>
      </div>}
    </div>
  );
};

export default Home;
