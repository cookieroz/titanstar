import React, { useState } from "react";
import TalentPath from './RunePath';
import TalentPointsSpent from './TalentPointsSpent';
import './TalentCalculator.scss';

export default function TalentCalculator() {
  const [talentPoints, setTalentPoints] = useState(6);

  const updateTalentPoints = (updateType) => {
    let updatedTalentPoints = talentPoints
    switch (updateType) {
      case 'increment':
        if (talentPoints < 6) { setTalentPoints(updatedTalentPoints + 1); }
        break;
      case 'decrement':
        if (talentPoints > 0) { setTalentPoints(updatedTalentPoints - 1); }
        break;
      default:
        return;
    }
  };

  const path1Runes = ['blocks', 'meal', 'cake', 'crown'];
  const path2Runes = ['ship', 'gear', 'lightening', 'skull'];
  const allRunePaths = [path1Runes, path2Runes]

  return (
    <div className="talent-calculator">
      <h3 className="talent-calculator__title">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h3>

      <section className="talent-calculator__content">
        <section className="talent-calculator__rune-paths">
          {allRunePaths.map((pathRunes, index) => {
            return(
              <div key={`path-wrapper-${index}`} className="talent-calculator__path-wrapper">
                <small
                  key={`path-title-${index}`}
                  className="talent-calculator__path-title">
                  Talent Path {index + 1}
                </small>
                <TalentPath
                  key={`path-${index}`}
                  runeTypes={pathRunes}
                  talentPoints={talentPoints}
                  updateTalentPoints={updateTalentPoints}
                />
              </div>
            )
          })}
        </section>
        <aside className="talent-calculator__points">
          <TalentPointsSpent talentPoints={talentPoints} />
        </aside>
      </section>
    </div>
  );
}