# Research & Decisions

This document outlines the key technical decisions for the Civic Samadhan platform, based on the user-provided requirements.

## Architectural Approach: Monolith vs. Microservices

**Decision**: A hybrid approach will be taken.
- **Variation 1 (Prototype):** A monolith-first approach will be used for the initial prototype to accelerate development and simplify deployment. This will involve a single Node.js backend and a React frontend.
- **Variation 2 (Scalable Version):** A microservices-first architecture will be the target for the scalable version. This will separate concerns into different services (e.g., AI classification, notifications) and allow for independent scaling.

**Rationale**: This approach balances speed of initial delivery with long-term scalability and maintainability.

## Technology Stack

**Decision**: The following MERN-based stack has been chosen:
- **Frontend**: React (Web), React Native (Mobile)
- **Backend**: Node.js with Express
- **Database**: PostgreSQL (primary), Redis (caching/notifications), MongoDB (optional for unstructured data)
- **AI**: Python microservice with Gemini API
- **Deployment**: AWS with Docker and Kubernetes/ECS

**Rationale**: This is a mature and widely-used stack that aligns with the project's requirements for scalability, performance, and available developer talent.