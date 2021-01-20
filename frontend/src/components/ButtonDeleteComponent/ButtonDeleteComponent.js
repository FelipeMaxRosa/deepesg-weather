import React from 'react';
import './styles.css';
import {FiX} from 'react-icons/fi';

function ButtonDelete() {
  return (
    <button type="submit" className="button-delete">
      <FiX />
    </button>
  )
}

export default ButtonDelete;
