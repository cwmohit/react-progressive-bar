# react-progressive-bar
A simple and customizable progress bar component for React. This package provides both a `<ProgressBar />` component and a custom hook `useProgressBar` to manage progress state.

![react-progressive-bar](https://github.com/user-attachments/assets/eef6bb47-f86f-4cbd-8efb-1c204c0d01b0)

# Installation
To install the package, use npm or yarn:
`npm install react-progressive-bar`
or
`yarn add react-progressive-bar`

## Components

### `ProgressBar`
A customizable progress bar component that can display both determinate and indeterminate states.
#### Props
-   **`progress`** (`number`): The progress percentage (0-100) for the progress bar. Defaults to `0`.
-   **`height`** (`number`): Height of the progress bar in pixels. Defaults to `20`.
-   **`color`** (`string`): Color of the progress bar. Defaults to `'blue'`.
-   **`indeterminate`** (`boolean`): If `true`, the progress bar shows an indeterminate loading animation. Defaults to `false`.
-   **`animationDuration`** (`string`): Duration of the progress bar animation. Defaults to `'0.5s'`.
-   **`animationTimingFunction`** (`string`): Timing function for the animation. Defaults to `'ease-in-out'`.

## Example Usage

```jsx
import React from 'react';
import { ProgressBar, useProgressBar } from 'react-progressive-bar';

const MyComponent = () => {
  const { progress, setProgress } = useProgressBar(0, 10, 1000);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Testing Progress Bar</h1>
      <ProgressBar
        progress={progress}
        color="green"
        height={30}
        animationDuration="4s"
      />
      <button onClick={() => setProgress(0)}>Reset Progress</button>
    </div>
  );
};

export default MyComponent;
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](https://github.com/cwmohit/react-progressive-bar/blob/main/LICENSE) file for details.

## Contributing

Feel free to open issues and pull requests to contribute to this project. Please ensure that your code follows the existing style and includes relevant tests.

## Changelog

### 1.0.0
-   Initial release with `ProgressBar` component and `useProgressBar` hook.
