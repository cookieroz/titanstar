import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RuneSquare.scss';

export default function RuneSquare({ ableToSelect, runeType, isSelected }) {
  const runeClass = `rune-square__${runeType}`;
  const [selectedClass, setSelectedClass] = useState('');
  const [selectableClass, setSelectableClass] = useState('');

  useEffect(() => setSelectableClass(ableToSelect ? 'rune-square--selectable' : ''), [ableToSelect]);
  useEffect(() => setSelectedClass(isSelected ? 'rune-square--selected' : ''), [isSelected]);

  return (
    <div className={`rune-square ${runeClass} ${selectedClass} ${selectableClass}`}>

    </div>
  );
}

RuneSquare.propTypes = {
  ableToSelect: PropTypes.bool,
  isSelected: PropTypes.bool,
  runeType: PropTypes.string,
};