import React from 'react';

import './style.scss';

function Scroll(props) {
  const Scroll = {
    overflow: 'scroll',
    height: '80vh'
  };
  return (
    <div className="Scroll" style={Scroll}>
      {props.children}
    </div>
  );
}

export default Scroll;
