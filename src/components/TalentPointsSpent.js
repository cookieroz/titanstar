import React from 'react';
import PropTypes from 'prop-types';
import './TalentPointsSpent.scss';

export default function TalentPointsSpent({ talentPoints }) {
  return (
    <div className="talent-points">
      <p className="talent-points__points-spent">{talentPoints}/6</p>
      <p className="talent-points__points-spent-text">Points Spent</p>
    </div>
  );
}

TalentPointsSpent.propTypes = {
  talentPoints: PropTypes.number,
};