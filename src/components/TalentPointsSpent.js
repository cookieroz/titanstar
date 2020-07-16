import React from 'react';
import PropTypes from 'prop-types';
import './TalentPointsSpent.scss';

export default function TalentPointsSpent({ spentPoints, talentPoints }) {
  return (
    <div className="talent-points">
      <p className="talent-points__points-spent">{spentPoints}/{talentPoints}</p>
      <p className="talent-points__points-spent-text">Points Spent</p>
    </div>
  );
}

TalentPointsSpent.propTypes = {
  spentPoints: PropTypes.number,
  talentPoints: PropTypes.number,
};