# React Tabs Project

This React application fetches and displays job experience information from an API and allows users to navigate through different job details using tabs.

## Overview

This project utilizes React to create an interactive interface that showcases various job experiences. Upon loading the application, it retrieves job data from the 'https://course-api.com/react-tabs-project' endpoint, displaying a loading message until the data is fetched. Once the data is loaded, users can view different job positions by clicking on buttons representing each job's company.

## Installation

To run this application locally:

1. Navigate to the project directory in your terminal.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. Access the application in your browser at `http://localhost:3000` (or a different port if specified).

## Features

- **Dynamic Job Tabs:** Clickable buttons representing different job positions allow users to switch between job experiences.
- **Job Information Display:** Displays details including company name, job title, dates of employment, and a list of duties for each job.
- **Loading State:** Shows a loading message while fetching job data from the API.
- **More Info Button:** Placeholder button for additional functionality (not implemented in the current version).

## Technologies Used

- React
- React Icons
- Asynchronous JavaScript (Async/Await)
- Fetch API

## Structure

- `App.js`: Main React component handling data fetching, rendering job information, and tab functionality.
- `styles.css`: Stylesheet defining the visual layout and design of the application.

## How to Use

Upon launching the application, users will see a loading message while the job data is being fetched. Once the data is loaded, they can navigate through different job experiences by clicking on the company buttons displayed on the screen. Each click on a button updates the displayed job information, showing details such as job title, company name, dates of employment, and duties associated with that position.

## Additional Notes

- The 'more info' button is a placeholder and does not have any implemented functionality in the current version of the application.
- This README may require updates as the application evolves or new features are added.

Feel free to explore, modify, and expand upon this React application!
