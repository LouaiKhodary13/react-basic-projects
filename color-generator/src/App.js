import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#fa2445').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={isError ? 'error' : ''}
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
