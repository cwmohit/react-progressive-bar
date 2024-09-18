import React from "react";

interface ProgressBarProps {
  progress?: number;
  height?: number;
  color?: string;
  indeterminate?: boolean;
  animationDuration?: string; // Duration of the progress bar animation
  animationTimingFunction?: string; // Timing function for the animation
  showPercentage?: boolean; // New prop to display percentage
  percentageColor?: string; // Optional prop to set percentage text color
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  height = 20,
  color = 'blue',
  indeterminate = false,
  animationDuration = '0.5s',
  animationTimingFunction = 'ease-in-out',
  showPercentage = false,
  percentageColor = 'black',
}) => {
  const containerStyle: React.CSSProperties = {
    height,
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: 50,
    overflow: 'hidden',
    position: 'relative',
  };

  const fillerStyle: React.CSSProperties = {
    height: '100%',
    width: `${progress}%`,  // Updates according to progress
    backgroundColor: color,
    transition: `width ${animationDuration} ${animationTimingFunction}`, // Smooth transition
    borderRadius: 'inherit',
    display: 'flex', // Flex to center the percentage inside
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  };

  const indeterminateStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    backgroundColor: color,
    animation: `indeterminate ${animationDuration} infinite`, // Animation for indeterminate
  };

  const percentageStyle: React.CSSProperties = {
    color: percentageColor,
    fontWeight: 'bold',
    fontSize: '12px',
    position: 'absolute',
    right: '8px'
  };

  return (
    <div style={containerStyle}>
      {!indeterminate && (
        <div style={fillerStyle}>
          {showPercentage && <span style={percentageStyle}>{`${progress}%`}</span>}
        </div>
      )}
      {indeterminate && <div style={indeterminateStyle}></div>}
    </div>
  );
};

// Add the CSS for the indeterminate animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes indeterminate {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
document.head.appendChild(style);