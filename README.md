# Gamified Notes App

This is a gamified notes application with a React frontend, FastAPI backend, and MongoDB database. Take notes, earn points, and level up!

## Features

- Create notes
- Read notes
- Update notes
- Delete notes
- **Gamification:** Earn points for creating notes and track your progress with a leveling system (e.g., Novice Noodler, Masterful Memo-er).

## Technologies Used

- Frontend: React
- Backend: FastAPI (Python)
- Database: MongoDB
- Deployment: Vercel

## Setup Instructions

### Prerequisites

- Node.js and npm (or yarn)
- Python 3.9+
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

### Backend Setup (FastAPI)

1.  **Create a virtual environment and activate it:**

    ```bash
    python -m venv venv
    ./venv/Scripts/activate  # On Windows
    source venv/bin/activate # On macOS/Linux
    ```

2.  **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3.  **Run the backend:**

    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup (React)

1.  **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the frontend:**

    ```bash
    npm start
    ```

## Deployment

This application can be deployed to Vercel. Follow these steps:

1.  **Install Vercel CLI:**

    ```bash
    npm install -g vercel
    ```

2.  **Login to Vercel:**

    ```bash
    vercel login
    ```

3.  **Deploy the project:**

    Navigate to the root of your project (`notesapp/`) and run:

    ```bash
    vercel --prod
    ```

    Vercel will detect the `vercel.json` file and deploy both your React frontend and FastAPI backend.

### Environment Variables on Vercel

For the backend to connect to MongoDB, you need to set the following environment variables in your Vercel project settings:

-   `MONGO_URL`: Your MongoDB connection string (e.g., from MongoDB Atlas).
-   `MONGO_DB_NAME`: The name of your MongoDB database.

To add environment variables:

1.  Go to your Vercel project dashboard.
2.  Navigate to "Settings" -> "Environment Variables."
3.  Add `MONGO_URL` and `MONGO_DB_NAME` with their respective values.
