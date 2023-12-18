# Grocery Bud Application

This is a simple React application named "Grocery Bud." It allows users to manage a grocery list by adding, editing, and removing items.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Dependencies](#dependencies)

## Features

- **Add Items:** Users can add grocery items to the list.
- **Edit Items:** Items in the list can be edited.
- **Remove Items:** Users can remove items from the list individually.
- **Clear All:** Clear the entire grocery list at once.
- **Alerts:** Alerts are displayed for actions such as adding, editing, and removing items.

## Installation

1. Install dependencies: `npm install`

## Usage

To start the application:

1. Run `npm start` in the project directory.
2. Open your browser and go to `http://localhost:3000` to view the Grocery Bud application.

## Folder Structure

The project directory structure is organized as follows:

- **`src/`**: Contains the source code of the React application.
  - **`components/`**: Includes reusable React components used within the app.
  - **`App.js`**: Main component containing the application logic.
  - **`index.js`**: Entry point for rendering the app.

## Components

### App Component (`App.js`)

The `App` component manages the state for the grocery list, handles form submissions, displays alerts, and includes the main functionality for adding, editing, and removing items.

### List Component (`List.js`)

The `List` component renders the grocery items, provides buttons to edit or delete each item, and receives props to interact with the main App component.

### Alert Component (`Alert.js`)

The `Alert` component is responsible for displaying alerts based on various actions performed in the app.

## Dependencies

The project primarily uses:

- **React**: JavaScript library for building user interfaces.
- **react-icons**: Library providing a set of icons for use in React applications.
