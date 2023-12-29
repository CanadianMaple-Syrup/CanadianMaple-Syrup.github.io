import { useState } from 'react';
import React from 'react';
import '../../styles/ConstructionPopup.css';
import '../../styles/Button.css';

function ConstructionPopup() {
  const [isActive, setIsActive] = useState<Boolean>(true);

  function close() {
    setIsActive(false);
  }

  return (
    (isActive && <div className='popup-background'>
      <div className='construction'>
        <text>This website is still under construction. As such many features are missing or broken. Mobile is currently not explicitely supported.</text>
        <br />
        <button className='button' onClick={close}>I Understand</button>
      </div>
    </div>) || <></>
  )
}

export default ConstructionPopup;