# Employee Management System

## Overview

This project is an Employee Management System built with React and Firebase. It allows users to add, edit, and delete employee information, and provides visual representations of employee data through charts.

## Features

- Add new employees
- Edit existing employee details
- Delete employees
- View employee information in a list and in chart format
- Authentication to restrict access to certain features

## Technologies Used

- React: For building the user interface
- Firebase: For backend services including Firestore for database and Firebase Authentication
- MDBReact: For UI components
- MUI: For charting components
- Bootstrap Icons: For icons

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GemMichael/Employee-Management-Dashboard
    ```

2. Navigate to the project directory:

    ```bash
    cd employee-management-system
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project.
3. Add a web app to your Firebase project.
4. Copy the Firebase config object.
5. Create a `firebaseConfig.js` file in the `src` directory and add your Firebase config object:

    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    };

    export default firebaseConfig;
    ```

6. Set up Firestore database in the Firebase console and create a collection named `employee`.

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```


## Usage

1. **Add Employee**: Navigate to the "Add Employee" section and fill out the form to add a new employee.
2. **Edit Employee**: Navigate to the "Edit Employee" section to edit employee details.
3. **Delete Employee**: Use the delete button in the "Edit Employee" section to remove an employee.
4. **View Employees**: Employee details can be viewed in a list format and as a bar chart showing the distribution of employment types.

## Project Structure

- `src/`: Contains all the source code.
  - `components/`: Contains React components.
  - `contexts/`: Contains context providers.
  - `firebaseConfig.js`: Firebase configuration file.
  - `App.js`: Main app component.
  - `index.js`: Entry point of the application.

## Contributing

If you want to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please reach out to me at mhigenieva@gmail.com
