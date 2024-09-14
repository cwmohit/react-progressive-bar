import React from "react";

interface ProgressBarProps {
  progress?: number;
  height?: number;
  color?: string;
  indeterminate?: boolean;
  animationDuration?: string; // Duration of the progress bar animation
  animationTimingFunction?: string; // Timing function for the animation
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  height = 20,
  color = 'blue',
  indeterminate = false,
  animationDuration = '0.5s',
  animationTimingFunction = 'ease-in-out',
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
    width: `${progress}%`,
    backgroundColor: color,
    transition: `width ${animationDuration} ${animationTimingFunction}`,
    borderRadius: 'inherit',
  };

  const indeterminateStyle: React.CSSProperties = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: color,
    animation: `indeterminate ${animationDuration} infinite`,
  };

  return (
    <div style={containerStyle}>
      {!indeterminate && <div style={fillerStyle}></div>}
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