import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <article
      className={`color`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value' style={{ color: 'white' }}>
        {hex}
      </p>
      {alert && <p className='alert'>Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
