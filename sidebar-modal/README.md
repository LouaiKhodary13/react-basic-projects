# React App with Modal and Sidebar Components

This React application is a simple implementation showcasing a modal and sidebar functionality using React Context API.

## Overview

The application comprises three main components:

- **Modal**: A pop-up modal window that displays "Modal Content."
- **Sidebar**: A collapsible sidebar menu containing links and social icons.
- **Home**: The main content area displaying buttons to trigger the modal and sidebar.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Icons**: Library providing a set of popular icons for use in React applications.
- **React Context API**: Used for managing global state and passing data through the component tree.

## Getting Started

### Installation

1. Navigate to the project directory in your terminal.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Folder Structure

- **src/**
  - **components/**: Contains the main React components.
    - **Home.js**: Component rendering buttons to trigger the modal and sidebar.
    - **Modal.js**: Component displaying a modal window.
    - **Sidebar.js**: Component containing the sidebar menu.
  - **context/**: Holds the context file for managing global state.
    - **context.js**: Defines the App Context and Provider for managing shared state.
  - **data/**: Contains data for links and social icons displayed in the sidebar.
  - **App.js**: Entry point of the application.
  - **index.js**: Renders the root component.

## Usage

- The `Home` component renders buttons to trigger the modal and sidebar.
- Clicking the buttons in the `Home` component will display the modal or toggle the sidebar.

## Additional Notes

- This application uses React Context API for state management, providing a centralized way to handle global state changes.
- Data for links and social icons in the sidebar can be modified or expanded by editing the respective files in the `data` folder.

Feel free to explore and modify the components and functionalities according to your requirements!
