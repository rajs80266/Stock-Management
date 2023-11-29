import React, { useEffect, useState } from "react";
import Wall from "./wall";
import Cell from "./cell";
import Goal from "./Goal";

const Cells = ({sample}) => {
    const [grid, setGrid] = useState(sample);
    const [player, setPlayer] = useState([5, 12]);
    const [win, setWin] = useState(false);

    const [arrowKeysPressed, setArrowKeysPressed] = useState({
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,
      });
    
      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key in arrowKeysPressed) {
            setArrowKeysPressed((prevState) => ({
              ...prevState,
              [event.key]: true,
            }));
          }
        };
    
        const handleKeyUp = (event) => {
          if (event.key in arrowKeysPressed) {
            setArrowKeysPressed((prevState) => ({
              ...prevState,
              [event.key]: false,
            }));
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
        };
      }, [arrowKeysPressed]);

      useEffect(() => {
        if(!win) {
            let played =  false;
            let next = [player[0], player[1]];
            let next_next = [player[0], player[1]];
            if (arrowKeysPressed.ArrowUp) {
                played = true;
                next[0] -= 1;
                next_next[0] -= 2;
            }
            if (arrowKeysPressed.ArrowDown) {
                played = true;
                next[0] += 1;
                next_next[0] += 2;
            }
            if (arrowKeysPressed.ArrowRight) {
                played = true;
                next[1] += 1;
                next_next[1] += 2;
            }
            if (arrowKeysPressed.ArrowLeft) {
                played = true;
                next[1] -= 1;
                next_next[1] -= 2;
            }

            const nextCell = grid[next[0]][next[1]];
            if(played && nextCell !== 0) {
                if(nextCell === 1 || nextCell === 4) {
                    let updated_grid = [...grid];
                    updated_grid[player[0]][player[1]] -= 2;
                    updated_grid[next[0]][next[1]] += 2;
                    setGrid(updated_grid);
                    setPlayer([next[0], next[1]])
                } else if(next_next) {
                    const next_nextCell = grid[next_next[0]][next_next[1]];
                    console.log(next_nextCell);
                    if(next_nextCell === 1 || next_nextCell === 4) {
                        let updated_grid = [...grid];
                        updated_grid[player[0]][player[1]] -= 2;
                        updated_grid[next[0]][next[1]] += 1;
                        updated_grid[next_next[0]][next_next[1]] += 1;
                        setGrid(updated_grid);
                        setPlayer([next[0], next[1]])
                    }
                }
            }
        }
    }, [arrowKeysPressed]);

    useEffect(() => {
        setWin(!grid.some(row => row.includes(4) || row.includes(6)));
    }, [grid]);

    if(win) {
        return "Win";
    }

    return (
        <div>
            {
                grid.map((row) => {
                    return (
                        <div style={{display: "flex"}}>
                        {
                            row.map((cell) => {
                                switch(cell) {
                                    case 0:
                                        return <Wall />;
                                    case 1:
                                        return <Cell />;
                                    case 2:
                                        return <Cell haveSTone />;
                                    case 3:
                                        return <Cell haveCar />;
                                    case 4:
                                        return <Goal />;
                                    case 5:
                                        return <Goal haveSTone />;
                                    default:
                                        return <Cell haveCar />;
                                }
                            })
                        }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Cells;