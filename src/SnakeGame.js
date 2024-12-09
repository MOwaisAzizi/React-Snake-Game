
import React, { useState, useEffect } from 'react';
import './SnakeGame.css';

const SnakeGame = () => {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = () => {
    const head = snake[0];
    let newHead;

    switch (direction) {
      case 'RIGHT':
        newHead = [head[0], head[1] + 1];
        break;
      case 'LEFT':
        newHead = [head[0], head[1] - 1];
        break;
      case 'UP':
        newHead = [head[0] - 1, head[1]];
        break;
      case 'DOWN':
        newHead = [head[0] + 1, head[1]];
        break;
      default:
        newHead = head;
    }

    const newSnake = [newHead, ...snake];

    if (newHead[0] < 0 || newHead[0] >= 10 || newHead[1] < 0 || newHead[1] >= 10 || newSnake.slice(1).some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])) {
      setGameOver(true);
      return;
    }

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    if (gameOver) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const intervalId = setInterval(moveSnake, 200);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalId);
    };
  }, [snake, direction, gameOver]);

  return (
    <div className="game-area">
      {gameOver && <h2>Game Over!</h2>}
      {Array.from({ length: 10 }).map((_, rowIndex) =>
        <div key={rowIndex} className="row">
          {Array.from({ length: 10 }).map((_, colIndex) => {
            const isSnake = snake.some(segment => segment[0] === rowIndex && segment[1] === colIndex);
            const isFood = food[0] === rowIndex && food[1] === colIndex;
            return (
              <div key={colIndex} className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;



