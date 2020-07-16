import React, { useState } from "react";
import TalentPath from './RunePath';
import TalentPointsSpent from './TalentPointsSpent';
import './TalentCalculator.scss';

export default function TalentCalculator() {
  const talentPoints = 6;
  const [spentPoints, setSpentPoints] = useState(0);

  const updateSpentPoints = (updateType) => {
    let updatedSpentPoints = spentPoints
    switch (updateType) {
      case 'increment':
        if (spentPoints < 6) { setSpentPoints(updatedSpentPoints + 1); }
        break;
      case 'decrement':
        if (spentPoints > 0) { setSpentPoints(updatedSpentPoints - 1); }
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
                  spentPoints={spentPoints}
                  talentPoints={talentPoints}
                  updateSpentPoints={updateSpentPoints}
                />
              </div>
            )
          })}
        </section>
        <aside className="talent-calculator__points">
          <TalentPointsSpent spentPoints={spentPoints} talentPoints={talentPoints} />
        </aside>
      </section>
    </div>
  );
}