# Color Generator

This is a simple React-based Color Generator application that allows users to generate color palettes based on inputted color values. The app uses the 'values.js' library to create variations of colors and display them in a visually appealing manner.

## Features

- **Color Input:** Users can input a color value in hexadecimal format (e.g., #f15025) to generate a palette of shades and tints.
- **Error Handling:** If an invalid color value is entered, the application will display an error message.
- **Color Display:** The generated colors are displayed as a list of swatches, each showing the color's hexadecimal value and percentage weight.

## Installation

1. Install dependencies: `npm install`
2. Start the application: `npm start`

## Usage

1. Enter a color value in the input field using the format #XXXXXX.
2. Click 'Submit' to generate a color palette based on the entered color.
3. The color palette will be displayed as swatches below the input field.
4. Click on any color swatch to copy its hexadecimal value to the clipboard. An alert will confirm the successful copy.

## Libraries and Tools Used

- **React:** Used for building the user interface and managing state.
- **values.js:** Utilized to generate color shades and tints based on the entered color value.

## Folder Structure

- **src/**
  - **components/**: Contains React components used in the application.
  - **utils.js**: Utility functions for color conversion (e.g., RGB to Hex).

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.
