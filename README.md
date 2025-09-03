# Gamified Notes App (Frontend Only)

This is a gamified notes application with a React frontend only. All notes are stored temporarily in your browser's memory and are not persistent across sessions or refreshes. Take notes, earn points, and level up!

## Features

- Create notes (browser-only)
- Read notes (browser-only)
- Update notes (browser-only)
- Delete notes (browser-only)
- **Gamification:** Earn points for creating notes and track your progress with a leveling system (e.g., Novice Noodler, Masterful Memo-er).

## Technologies Used

- Frontend: React
- Deployment: Vercel

## Setup Instructions

### Prerequisites

- Node.js and npm (or yarn)

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

    Vercel will detect your React frontend and deploy it as a static site.
