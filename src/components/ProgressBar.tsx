import React from 'react';

interface ProgressBarProps {
  progress: number; // percentage value 0 - 100
  height?: number; // height of the progress bar
  color?: string; // progress bar color
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = 20, color = 'blue' }) => {
  const containerStyle: React.CSSProperties = {
    height,
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: 50,
    overflow: 'hidden'
  };

  const fillerStyle: React.CSSProperties = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: color,
    transition: 'width 0.5s ease-in-out',
    borderRadius: 'inherit'
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}></div>
    </div>
  );
};

export default ProgressBar;