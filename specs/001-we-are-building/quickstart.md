# Quickstart Guide

This guide provides the steps to set up and run the Civic Samadhan platform for local development.

## Prerequisites
- Node.js (LTS)
- Python 3.11
- Docker
- AWS CLI

## Setup
1.  **Clone the repository**: `git clone ...`
2.  **Install dependencies**:
    -   `cd frontend && npm install`
    -   `cd backend && npm install`
    -   `cd services/ai-classifier && pip install -r requirements.txt`
3.  **Set up environment variables**: Create a `.env` file in the `backend` directory with the necessary database and API credentials.
4.  **Start services**: `docker-compose up -d`

## Running the application
1.  **Start the backend**: `cd backend && npm start`
2.  **Start the frontend**: `cd frontend && npm start`
3.  **Access the application**: Open `http://localhost:3000` in your browser.