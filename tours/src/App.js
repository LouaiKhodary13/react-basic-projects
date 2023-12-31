import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import { Button } from 'bootstrap';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      setIsLoading(false);
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeTour = (id) => {
    let removed = tours.filter((tour) => tour.id !== id);
    setTours(removed);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
