import React, { useState } from 'react';
import { data } from './Data';
import './style.css';
import { FaAngleLeft, FaAngleRight, } from 'react-icons/fa';


export default function App() {
  const [current, setClicked] = useState(0);

  const clickLeft = () => {
    setClicked(current == 0 ? data.length - 1 : current - 1);
  };

  const clickRight = () => {
    setClicked(current == data.length - 1 ? 0 : current + 1);
  };

  return (
    <section>
      <FaAngleLeft onClick={clickLeft} className="faLeft" />
      <FaAngleRight onClick={clickRight} className="faRight" />
      {data.map((item, index) => (
        <div key={index} className={current==index? 'slide activ' : 'slide'}>
          {current == index && (
            <img key={index} src={item.image} alt="travel image" />
          )}
        </div>
      ))}
    </section>
  );
}
