# React Tours Project

This project is a simple React application that fetches tour information from an API and displays it to users. Users have the ability to view available tours, get more details about each tour, and remove tours they are not interested in.

## Features

- **Fetching Tours**: The app fetches tour data from an external API (`https://course-api.com/react-tours-project`) using `fetch` and displays them.
- **Tour Display**: Tours are displayed with their names, prices, images, and brief descriptions. Users can expand to view more details or collapse the description.
- **Removing Tours**: Users can remove tours they are not interested in by clicking the "Not Interested" button.
- **Refreshing Tours**: If no tours are left, users can click the "Refresh" button to fetch tours again.

## Tech Stack

- **React**: The entire application is built using React, including functional components and hooks.
- **Bootstrap**: Bootstrap is used for styling and the Button component.

## Usage

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Run the application:**

    ```bash
    npm start
    ```

3. **Access the application in your browser at** `http://localhost:3000`.

## Folder Structure

- **`src/components`**: Contains React components used in the application.
- **`src/App.js`**: Main component handling state and rendering of tours.
- **`src/Loading.js`**: Component for displaying a loading indicator.
- **`src/Tours.js`**: Component to render a list of tours.
- **`src/Tour.js`**: Component to display individual tour details.




