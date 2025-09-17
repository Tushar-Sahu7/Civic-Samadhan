# Technical Research for Civic Samadhan Prototype

This document outlines the technical plan for building the Civic Samadhan prototype. The goal is to create a functional end-to-end prototype demonstrating the complete issue lifecycle.

## 1. High-Level Goals

- **Deliver a working prototype** that demonstrates the full issue lifecycle: complaint submission → AI categorization → duplicate detection & batching → department assignment by admin → staff assignment → status lifecycle (Acknowledged → Staff Assigned → In Progress → Resolved) → citizen feedback.
- **Stack**: React (web PWA), Node.js/Express backend, Python microservice for AI logic, PostgreSQL for the primary datastore, Redis for cache/notifications, S3-compatible storage for media, and Leaflet for maps.
- **Constraints**: Single-region deployment, database hosted in India, demo-scale (thousands of complaints), and role-based authentication (visitor, citizen, staff, department, admin).
- **Deliverables**:
    - DB schema (Postgres) + sample SQL create scripts.
    - Dummy data generation scripts.
    - Backend API contract (REST) and minimal implementation scaffolding.
    - AI microservice prototype.
    - Duplicate detection & batching worker.
    - Frontend React pages.
    - Simple deployment docs (Docker + Docker Compose or Kubernetes manifests).
    - README describing how to run locally.

## 2. Data Model (Postgres)

Detailed table structures are defined in `data-model.md`.

## 3. Dummy Data Generation

A script will be provided to insert:
- 200 fake citizens.
- 20 staff accounts across 4 departments.
- 4 seeded departments.
- 1000 complaints with random data.

## 4. AI Categorization + Priority Scoring (Prototype Logic)

A Python FastAPI microservice will:
- **Categorize** issues based on keywords.
- **Check for duplicates** using spatial proximity, text similarity, and image hashing.
- **Batch and merge** duplicate complaints.
- **Calculate a priority score** based on severity, report count, location sensitivity, time, and random noise.

## 5. Batching Worker/Service

A background worker will:
- Poll for new complaints.
- Call the AI service.
- Link or create issues.
- Push notifications to department heads.

## 6. Assignment Workflow

- Department heads will assign issues to staff via the UI.
- Staff will update the issue status.

## 7. APIs

API endpoints are defined in the `contracts/` directory.

## 8. Frontend Map Integration (Leaflet)

- Use Leaflet with OpenStreetMap or Mapbox.
- Display issues as pins on a map.
- Clicking a pin will show issue details.

## 9. Deployment & Infra (Prototype)

- Docker Compose for local development.
- Kubernetes with Helm charts for staging/production.

## 10. Security & Constraints

- JWT authentication, role-based middleware, CORS, rate-limiting.
- Data residency in India.
- PII encryption.

## 11. Testing & Validation

- Unit tests for AI rules, duplicate detection, and API endpoints.
- Load testing guidelines using k6.

## 12. Variations

- **A) Monolith-first**: Single repo Node backend with a separate Python AI service.
- **B) Microservices**: Separate services for each domain.

We will proceed with **Variation A** for the prototype to ship faster.
