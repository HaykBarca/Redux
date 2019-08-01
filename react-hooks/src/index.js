import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));