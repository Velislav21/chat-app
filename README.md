# Real-time Chat Application

This is a full-stack, real-time chat application allows instant communication between users. It features user authentication, profile management, live messaging, and real-time updates.

---

## Built with the tools and technologies:

-   **Frontend:** React 19, Vite, TanStack Query, Socket.io-client, Axios, React Router
    <br />
    ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
    ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)
    ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&logoColor=white)
    ![Axios](https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white)
    ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
    ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

-   **Backend:** Node.js, Express.js, MongoDB, Mongoose, Socket.io, JWT
    <br />
    ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
    ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
    ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
    ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
    ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&logoColor=white)
    ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
    ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

-   **DevOps & Deployment:** Docker, Google Cloud Run, Artifact Registry, Firebase Hosting
    <br />
    ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
    ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
    ![Firebase](https://img.shields.io/badge/firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black)
---

## Key Features:

-   User registration and login with JWT-based authentication.
-   Password hashing using bcrypt.
-   User profile creation, viewing, editing, and deletion.
-   Real-time messaging between authenticated users.
-   Live updates for user profile changes and online status.
-   Search functionality to find other users.

---

## Important Notes:

-   You need to create an account and log in to access the chat functionalities.
-   (Add any other specific notes, e.g., "The application is optimized for mobile viewports" or "Ensure your MongoDB instance is accessible.")

---

## Project Structure:

The project contains two main subfolders:

-   `client` — contains the React (Vite) frontend application.
-   `server` — contains the Node.js (Express.js) backend application.

To explore the code, open the main project folder (containing both `client` and `server`) in Visual Studio Code or your preferred editor.

---

## Getting Started (Running Locally):

### Prerequisites:

-   [Node.js](https://nodejs.org/) (v18.x or later recommended) and npm installed.
-   A MongoDB instance (local or cloud-based like MongoDB Atlas).
-   Git (for cloning the repository).

### Installation & Setup:

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone https://github.com/Velislav21/chat-app.git
    cd chat-app (or whatever u name the main folder containing both the client and server sub-folders)
    ```

2.  **Setup the Backend (Server):**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add the following environment variables:
    ```env
    PORT=8080 # Or any port you prefer for the backend
    MONGO_DB_URI="your_mongodb_connection_string"
    JWT_SECRET="your_strong_jwt_secret"
    ```
    Replace placeholder values with your actual data.

3.  **Setup the Frontend (Client):**
    ```bash
    cd ../client # Navigate back to the root if you were in server, then to client
    # If you are in the project root: cd client
    npm install
    ```
### Running the Application:

1.  **Start the Backend Server:**
    Open a terminal, navigate to the `server` directory:
    ```bash
    cd server
    npm run dev
    # OR
    npm start
    ```
    The server should now be running (e.g., on `http://localhost:8080`).

2.  **Start the Frontend Application:**
    Open a *new* terminal, navigate to the `client` directory:
    ```bash
    cd client
    npm run dev
    ```
    The React application should now be running (e.g., on `http://localhost:5173` or another port specified by Vite).

---

## Deployment:

The backend is containerized using Docker and deployed on Google Cloud Run, <br> with images stored in Google Artifact Registry.
<br>The frontend is deployed on Firebase Hosting.
<br>The project supports CI/CD workflows for streamlined updates.
---

