import React, {useState} from 'react';

import stylesHeader from "../styles/Header.module.css";


const Header = () => {
  // const [changeColor, setColor] = useState(0);
  return (
    <div>
      {/* <h1 className="title"
        onClick={()=> {
          changeColor < 3 ? setColor(5) : setColor(0)
        }}
      > 
        <span>WebDev</span>News
        <style jsx>
          {`
            .title {
              color: ${changeColor > 3 ? 'red' : 'blue'};
            }
          `}
        </style>
      </h1> */}
      <h1 className={stylesHeader.title}>
        <span>WebDev</span>News
      </h1>
      <p className={stylesHeader.description}>
        Keep up to date with latest web dev news
      </p>
    </div>
  )
}
 
export default Header;