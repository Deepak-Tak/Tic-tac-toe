//<Scores/>
import Block from "./Block";
import { useEffect, useState } from "react";

const Game = () => {
  const blocksArray = [];
  const [newGame, setNewGame] = useState(0);
  const [turn, setTurn] = useState("X");
  const [track, setTrack] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  useEffect(() => {
    if (newGame == 1) {
      setTurn("X");
      setTrack([null, null, null, null, null, null, null, null, null]);
      setNewGame(0);
    }
  });

  function checkRowColumnOrDiagonal(track, i, j) {
    let matrix = [];
    for (let k = 0; k < 3; k++) {
      matrix[k] = [];
      for (let l = 0; l < 3; l++) {
        matrix[k][l] = track[k * 3 + l];
      }
    }
    if (
      (i == 0 && j == 1) ||
      (i == 1 && j == 0) ||
      (i == 1 && j == 2) ||
      (i == 2 && j == 1)
    ) {
      if (
        (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) ||
        (matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j])
      ) {
        return matrix[i][j];
      } else return -1;
    } else {
      if ((i == 0 && j == 0) || (i == 2 && j == 2)) {
        if (
          (matrix[i][0] == matrix[i][1] && matrix[i][2] == matrix[i][1]) ||
          (matrix[0][j] == matrix[1][j] && matrix[2][j] == matrix[1][j]) ||
          (matrix[0][0] == matrix[1][1] && matrix[2][2] == matrix[1][1])
        ) {
          return matrix[i][j];
        } else return -1;
      } else {
        if (i != 2 || j != 2) {
          if (
            (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) ||
            (matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j]) ||
            (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0])
          ) {
            return matrix[i][j];
          } else return -1;
        } else {
          if (
            (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) ||
            (matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j]) ||
            (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) ||
            (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2])
          ) {
            return matrix[i][j];
          } else return -1;
        }
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      blocksArray.push(
        <div className="row-span-1 col-span-1 shadow-xl hover:bg-slate-200">
          <Block
            turn={turn}
            index={[i, j]}
            callBack={() => {
              if ("O" == turn) {
                if (i == 0) {
                  for (let k = 0; k < 3; k++) {
                    if (j == k) {
                      const tempArray = [...track];
                      tempArray[j] = 0;
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 0) {
                        setTurn("O-WON");
                        return;
                      }
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 1) {
                        setTurn("X-WON");
                        return;
                      }

                      setTrack(tempArray);
                    }
                  }
                }
                if (i == 1) {
                  for (let k = 0; k < 3; k++) {
                    if (j == k) {
                      const tempArray = [...track];
                      tempArray[3 + j] = 0;
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 0) {
                        setTurn("O-WON");
                        return;
                      }
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 1) {
                        setTurn("X-WON");
                        return;
                      }

                      setTrack(tempArray);
                    }
                  }
                }
                if (i == 2) {
                  for (let k = 0; k < 3; k++) {
                    if (j == k) {
                      const tempArray = [...track];
                      tempArray[6 + j] = 0;
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 0) {
                        setTurn("O-WON");
                        return;
                      }
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 1) {
                        setTurn("X-WON");
                        return;
                      }

                      setTrack(tempArray);
                    }
                  }
                }
                setTurn("X");
              } else {
                if (i == 0) {
                  for (let k = 0; k < 3; k++) {
                    if (j == k) {
                      const tempArray = [...track];
                      tempArray[j] = 1;
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 0) {
                        setTurn("O-WON");
                        return;
                      }
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 1) {
                        setTurn("X-WON");
                        return;
                      }

                      setTrack(tempArray);
                    }
                  }
                }
                if (i == 1) {
                  for (let k = 0; k < 3; k++) {
                    if (j == k) {
                      const tempArray = [...track];
                      tempArray[3 + j] = 1;
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 0) {
                        setTurn("O-WON");
                        return;
                      }
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 1) {
                        setTurn("X-WON");
                        return;
                      }

                      setTrack(tempArray);
                    }
                  }
                }
                if (i == 2) {
                  for (let k = 0; k < 3; k++) {
                    if (j == k) {
                      const tempArray = [...track];
                      tempArray[6 + j] = 1;
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 0) {
                        setTurn("O-WON");
                        return;
                      }
                      if (checkRowColumnOrDiagonal(tempArray, i, j) == 1) {
                        setTurn("X-WON");
                        return;
                      }

                      setTrack(tempArray);
                    }
                  }
                }
                setTurn("O");
              }
            }}
            newGame={newGame}
          />
        </div>
      );
    }
  }

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-between pt-[10%] pr-[20%] pl-[20%] ">
          <h1 className="text-6xl font-bold">
            Let's Play <br /> the tic-tac-toe <br /> Game
          </h1>
          <div className="grid grid-rows-[100px,100px,100px] grid-cols-[100px,100px,100px] shadow-xl gap-2 bg-white rounded-lg">
            {...blocksArray}
          </div>
        </div>
      </div>
      <div className=" flex relative text-2xl left-[64.8%] w-[100px] justify-center pt-2 pb-2  mt-3 rounded-md font-bold text-sky-500 shadow-xl bg-white">
        <div>{turn}</div>
      </div>
      <div className=" flex relative left-[66.8%] w-[50px] justify-center pt-2 pb-2 mt-3 rounded-md">
        <img
          onClick={() => {
            setNewGame(1);
          }}
          src={require("./jpg/logo-removebg-preview.png")}
        />
      </div>
    </>
  );
};

export default Game;
