import React from 'react';

interface ProgressDisplayProps {
  points: number;
}

const ProgressDisplay: React.FC<ProgressDisplayProps> = ({ points }) => {
  const getLevel = (currentPoints: number): string => {
    if (currentPoints < 50) return "Novice Noodler";
    if (currentPoints < 150) return "Apprentice Annotator";
    if (currentPoints < 300) return "Skilled Scribe";
    if (currentPoints < 500) return "Masterful Memo-er";
    return "Legendary Lorem-Ipsum";
  };

  const level = getLevel(points);

  return (
    <div className="progress-display">
      <h2>Your Progress</h2>
      <p>Points: {points}</p>
      <p>Level: {level}</p>
    </div>
  );
};

export default ProgressDisplay;
