import React from 'react';
import './styles.css';
import {FiX} from 'react-icons/fi';

const ButtonDelete = ({ id, onClick }) => {
  const handleButtonClick = () => {
    console.log(id);
    onClick(id);
  }

  return (
    <button className="button-delete" onClick={handleButtonClick}>
      <FiX />
    </button>
  )
}

export default ButtonDelete;
