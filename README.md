# Schedules App - MERN project.

This is a MERN (MongoDB, Express.js, React.js, Node.js) application for managing schedules and user authentication.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project's root directory and configure the following environment variables:

   ```plaintext
   MONGO_URL=<mongodb-connection-url>
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Access the application at `http://localhost:3000`.

## API Endpoints

- `POST /register`: Register a new user.
- `POST /login`: Log in a user and retrieve a JSON Web Token (JWT).
- `GET /test`: Check if the server is running.
- `GET /profile`: Get user profile information.
- `POST /create-schedule`: Create a new schedule.
- `GET /schedules`: Get all schedules.
- `POST /logout`: Log out the user.

## Technologies Used

- Express.js: Backend web framework
- MongoDB: Database
- bcrypt: Password hashing
- JWT (JSON Web Tokens): Authentication
- dotenv: Environment variables
- cors: Cross-origin resource sharing
- cookie-parser: Parse cookies

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
