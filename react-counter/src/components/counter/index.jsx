import React, {useState } from 'react';
import Button from '../button';
import './index.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount(count + 1);
    history.push('Increment');
  };

  const decrement = () => {
    setCount(count - 1);
    history.push('Decrement');
  };

  const reset = () => {
    setHistory([]);
    setCount(0);
  }

  const onInputChange = (evt) => {
    setCount(parseInt(evt.target.value) || 0);
  }

  const getCountValueClasses = () => {
    let classes = "count__value";
    
    if (count > 0) {
      classes += " count__value--positive";
    } else if (count < 0) {
      classes += " count__value--negative";
    }

    return classes
  }

  return (
    <div className="counter">
      <h2 className="counter__title">Dummy Counter</h2>
      <div className="count">
        <Button clickHandler={() => decrement()}>-</Button>
        <input className={getCountValueClasses()} value={count} onChange={onInputChange} />
        <Button clickHandler={() => increment()}>+</Button>
      </div>
     { history.length > 0
      ? (
          <div className="history">
            <h3>Your history:</h3>
            {
              history.map((operation, index) => (
                <p className="history__entry" key={index}>{operation}</p>
              ))
            }
            <Button clickHandler={() => reset()}>
              Reset
            </Button>
          </div>
        )
      : <p>No history found</p>
      }
    </div>
  );
};

export default Counter;
