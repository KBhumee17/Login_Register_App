# Login_Register_App

This is a full-stack login and registration application built with React (frontend) and Node.js with Express (backend). It uses MongoDB as the database to store user credentials.

---

## Features

- User registration with name, email, and password
- User login with authentication
- React Router for frontend page navigation
- Axios for API communication between frontend and backend

---

## Project Structure

- `/client` — React frontend application
- `/server` — Node.js/Express backend API

---

## Setup Instructions

### Prerequisites

- Node.js installed (v14 or higher recommended)
- MongoDB installed and running locally or a MongoDB Atlas URI
- npm (comes with Node.js)

### Backend Setup

1. Open terminal, navigate to the `server` folder:

   ```bash
   cd Login_Register/server

2. Install dependencies:
   
   ```bash
   npm install

3. Create a .env file in the server folder and add:
   
   PORT=3001
   mongodb://localhost:27017

4. Start the backend server:

The server should run on http://localhost:3001.

### Frontend Setup

1. Open a new terminal window, navigate to the client folder:

 ```bash
cd Login_Register/client
```

 2. Install dependencies:

    ```bash
    npm install
     ```

  3.Start the React development server:

 ```bash
    npm run dev
  ```

The React app should open at http://localhost:5173 (or another port if 5173 is occupied).

--- 


## How to Use

- Open the React app in your browser
- Register a new user via the /register route
- Login via the /login route
- After login, you will be redirected to the /home route (you can customize this)

## Assumptions

- MongoDB is installed locally or you have a valid MongoDB URI.
- Node.js and npm are installed and properly configured.
- Backend runs on port 3001, frontend runs on 5173 (default Vite port).
- Basic authentication and routing logic is implemented.

## Technologies Used

- React.js (with React Router and Axios)
- Node.js and Express.js
- MongoDB with Mongoose
- Bootstrap for styling

