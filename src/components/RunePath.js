import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RuneSquare from './RuneSquare';
import './RunePath.scss';

export default function RunePath({ runeTypes, spentPoints, talentPoints, updateSpentPoints }) {
  const [hasPoints, setHasPoints] = useState(spentPoints < talentPoints );

  function initPath() {
    const createdPath = {};
    runeTypes.forEach((type, index) => {
      createdPath[type] = {
        ableToSelect: index === 0,
        highlightClass: '',
        isSelected: false,
        previousRuneType: runeTypes[index - 1] || null,
      };
    });
    return createdPath;
  }

  const [path, setPath] = useState(initPath());

  function getPreviousRune(rune) {
    return rune.previousRuneType ? path[rune.previousRuneType] : null;
  }

  function isAbleToSelect(rune) {
    const previousRune = getPreviousRune(rune);
    return previousRune ? previousRune.isSelected && hasPoints : hasPoints
  }

  function setListItemClass(rune) {
    const previousRune = getPreviousRune(rune);
    const shouldHaveHighlight = previousRune ? previousRune.isSelected && !rune.isSelected : false;
    return shouldHaveHighlight ? 'rune-path__rune--highlight' : '';
  }

  function updateRunes(updatedRune = null) {
    if (!path || runeTypes) { return; }
    const tempPath = updatedRune ? { ...path, updatedRune } : { ...path };
    runeTypes.forEach((type) => {
      let rune = tempPath[type]
      rune.ableToSelect = isAbleToSelect(rune)
      rune.highlightClass = setListItemClass(rune)
    });
    setPath({ ...tempPath });
  }

  function checkIfRuneIsSelectable(rune) {
    const previousRune = getPreviousRune(rune);
    return previousRune ? previousRune.isSelected && !rune.isSelected && hasPoints : !rune.isSelected && hasPoints;
  }

  function deselectRune(event, runeType) {
    event.preventDefault();
    let rune = path[runeType];
    if (rune.isSelected) {
      spentPoints > 0 && updateSpentPoints('decrement');
      rune.isSelected = false;
      updateRunes(rune);
    }
  }

  function selectRune(runeType) {
    let rune = path[runeType];
    const shouldUpdate = checkIfRuneIsSelectable(rune);
    if (shouldUpdate) {
      spentPoints < talentPoints && updateSpentPoints('increment');
      rune.isSelected = true;
      updateRunes(rune);
    }
  }

  useEffect(() => setHasPoints(spentPoints < talentPoints), [spentPoints, talentPoints]);

  return (
    <ul className="rune-path">
      {Object.keys(path).map((key) => {
        return(
          <li
            key={key}
            className={`rune-path__rune ${path[key].highlightClass}`}
            onClick={() => selectRune(key)}
            onContextMenu={(event) => deselectRune(event, key)}>
            <RuneSquare
              key={key}
              ableToSelect={path[key].ableToSelect && hasPoints}
              runeType={key}
              isSelected={path[key].isSelected}
            />
          </li>
          )
      })}
    </ul>
  );
}

RunePath.propTypes = {
  runeTypes: PropTypes.array,
  spentPoints: PropTypes.number,
  talentPoints: PropTypes.number,
  updateSpentPoints: PropTypes.func,
};
