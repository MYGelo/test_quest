import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import Hansel from './img/Hansel.png';
import Image from './img/img1.png';

export function Images(props) {
  return (
    <img
      style={{ marginLeft: '36px', marginRight: '36px', marginTop: '28px' }}
      src={Image}
      alt="background"
    />
  );
}
export function Boy(props) {
  return (
    <img
      style={{
        position: 'absolute',
        width: '62px',
        left: '42.3%',
        top: '44%',

        borderRadius: '50%',
        background: '#5736a3',
      }}
      src={Hansel}
      alt="boy"
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
