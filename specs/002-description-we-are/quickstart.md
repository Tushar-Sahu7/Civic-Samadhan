# Quickstart Guide for Civic Samadhan Prototype

This guide provides instructions for setting up and running the Civic Samadhan prototype locally using Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Setup

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. **Create a `.env` file** in the root of the project and add the following environment variables:

   ```
   # PostgreSQL
   POSTGRES_USER=admin
   POSTGRES_PASSWORD=password
   POSTGRES_DB=civic_samadhan

   # Redis
   REDIS_PASSWORD=password

   # JWT
   JWT_SECRET=supersecret
   ```

## Running the Prototype

1. **Build and start the services** using Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. **The application will be available at `http://localhost:3000`**.

## Services

The Docker Compose setup includes the following services:

- `postgres`: PostgreSQL database
- `redis`: Redis server
- `api`: Node.js/Express backend API
- `ai-service`: Python FastAPI AI microservice
- `frontend`: React frontend
- `worker`: Background worker for batching and notifications

## Dummy Data

The first time you run the application, the database will be seeded with dummy data, including:

- 200 fake citizens
- 20 staff accounts across 4 departments
- 4 departments
- 1000 complaints
