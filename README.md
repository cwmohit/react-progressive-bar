# react-progressive-bar
A simple and customizable progress bar component for React. This package provides both a `<ProgressBar />` component and a custom hook `useProgressBar` to manage progress state.

![react-progressive-bar](https://github.com/user-attachments/assets/e4487790-3ad6-4abe-9acd-304b05bb31a0)

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
-   **`animationTimingFunction`** (`boolean`): If `true`, displays the progress percentage inside the progress bar. Defaults to `false`.
-   **`showPercentage`** (`string`): Duration of the progress bar animation. Defaults to `'0.5s'`.
-   **`percentageColor`** (`string`): Color of the percentage text inside the progress bar. Defaults to `black`.

### `useProgressBar`
A custom hook to manage the progress state of the progress bar.
#### Props
-   **`initialValue`** (`number`): The initial value of the progress. Defaults to `0`.
-   **`step`** (`number`): The amount by which the progress increases in each interval. Defaults to `10`.
-   **`interval`** (`number`): The time interval (in milliseconds) at which the progress is updated. Defaults to `1000`.

#### `returns`
-   **`progress`** (`number`): The current progress value.
-   **`setProgress`** (`Function`): A function to manually set the progress value.


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
        color="#4CAF50"
        height={24}
        showPercentage={true}
        indeterminate={false}
        percentageColor="black"
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

### 1.1.0
-   Bug fixes in Initial release with `ProgressBar` component and `useProgressBar` hook.

### 1.2.0
-   Percentage and custom features added for `ProgressBar` and updated `useProgressBar` default values.
