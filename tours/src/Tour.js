import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {isExpand ? info : `${info.substring(0, 200)}`}...
          <button onClick={() => setIsExpand(!isExpand)}>
            {isExpand ? 'Show Less' : 'show More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
