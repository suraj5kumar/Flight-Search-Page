# Flight Search Application

This is a flight search application built using **Vite**, **React**, **JavaScript**, and **Tailwind CSS**. The application allows users to search for flights by providing necessary details, view flight search results, and check individual flight details. 

## Features

- **Flight Search Page**: Users can enter their departure location, destination, and other necessary details.
- **Loading Screen**: After submitting the search, a loading effect will appear for 3 seconds.
- **Search Results Page**: Displays a list of flights based on the search criteria.
- **Flight Details**: Clicking on a flight result will show additional details about that flight.
- **Responsive Design**: The interface is built using Tailwind CSS, ensuring a fully responsive experience on different screen sizes.

## Technologies Used

- **Vite**: For fast development with React.
- **React**: Frontend library for building the user interface.
- **JavaScript**: Core programming language for building the application logic.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Browser Support

The application has been tested and works well in the following browsers:

- **Firefox** (latest version)
- **Google Chrome** (latest version)
- **Microsoft Edge** (latest version)

For other browsers like Safari or Opera, functionality and compatibility have not been thoroughly tested.
  
## Setup Instructions

Follow these steps to run the project locally on your machine:

### Prerequisites

- **Node.js** (version 16.0.0 or later)
- **npm** (version 7.0.0 or later)

### Steps to Run Locally

1. **Clone the Repository**  
   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/suraj5kumar/Flight-Search-Page.git
   ```

2. **Navigate to the Project Directory**  
   Change to the project directory:

   ```bash
   cd Flight-Search-Page
   ```

3. **Install Dependencies**  
   Install the required dependencies using npm:
   
   ```bash
   npm install
   ```

4. **Start the Development Server**  
   Once the dependencies are installed, run the following command to start the development server:

   ```bash
   npm run dev
   ```

5. **Open in Browser**   
   Open your browser and go to:

   ```bash
   http://localhost:3000
   ```
This will open the flight search application.

## Project Structure

```bash
┣ Airport Data/       # Contains json file of airports
┣ Public/Images       # images
src/
 ┣ Components/         # Reusable components like Inputs, FlightsList, etc.
 ┣ Context/            # Context API file to pass data through the component tree
 ┣ Pages/              # Page components (Flight Search, Loading Screen, Search Results)
 ┣ App.jsx             # Main app component
 ┣ index.css           # Main CSS file
 ┗ main.jsx            # Entry point for the React app
┣ index.HTML           # Main HTML file

```

## Tailwind CSS Configuration
Tailwind CSS is configured in the **tailwind.config.js** file. You can customize the styles and responsive breakpoints as needed.

## Future Improvements
Integration with live flight data for real-time search results.
Add form validation to ensure proper input from users.

## Screenshots

![App Screenshot](/public/Images/home.png)

![App Screenshot](/public/Images/validation.png)

![App Screenshot](/public/Images/loading_effect.png)

![App Screenshot](/public/Images/results.png)

![App Screenshot](/public/Images/individual_details.png)

![App Screenshot](/public/Images/search_on_results_page.png)

