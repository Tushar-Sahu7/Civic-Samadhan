# Tasks for Civic Samadhan Prototype

This document outlines the tasks required to build the Civic Samadhan prototype. The tasks are ordered by dependency.

## Phase 1: Setup and Database

- **T001**: [Setup] Initialize `backend` Node.js/Express project with a basic folder structure (controllers, models, routes, services).
- **T002**: [Setup] Initialize `services/ai-classifier` Python/FastAPI project with a basic structure.
- **T003**: [Setup] Review and confirm the existing `frontend` React project structure.
- **T004**: [Setup] Create the `docker-compose.yml` file for local development, including services for the backend, AI service, frontend, database, and worker.
- **T005**: [DB] Write the SQL script to create the database schema based on `data-model.md`.
- **T006**: [DB] Create a script (Node.js or Python) to seed the database with dummy data as specified in `research.md`.

## Phase 2: Backend Implementation (TDD)

- **T007**: [Test] [P] Create contract tests for the Auth API (`/api/auth/signup`, `/api/auth/login`).
- **T008**: [Test] [P] Create contract tests for the Complaints API (`/api/complaints`).
- **T009**: [Test] [P] Create contract tests for the Issues API (`/api/issues`).
- **T010**: [Test] [P] Create contract tests for the Map API (`/api/map/pins`).
- **T011**: [Test] [P] Create contract tests for the Admin API (`/api/admin`).
- **T012**: [Core] Implement the database models for `users`, `departments`, and `staff`.
- **T013**: [Core] Implement the authentication service, including JWT generation and validation.
- **T014**: [Core] Implement the Auth API endpoints. Ensure contract tests pass.
- **T015**: [Core] Implement the database models for `complaints`, `issues`, `feedbacks`, and `ai_insights`.
- **T016**: [Core] Implement the Complaints API endpoints. Ensure contract tests pass.
- **T017**: [Core] Implement the Issues API endpoints. Ensure contract tests pass.
- **T018**: [Core] Implement the Map API endpoint. Ensure contract tests pass.
- **T019**: [Core] Implement the Admin API endpoints. Ensure contract tests pass.

## Phase 3: AI Microservice and Worker

- **T020**: [AI] Implement the keyword-based categorization logic in the AI service.
- **T021**: [AI] Implement the duplicate detection logic using spatial and text similarity heuristics.
- **T022**: [AI] Implement the priority scoring logic.
- **T023**: [AI] Create the FastAPI endpoints for the AI service (`/classify`, `/batch_check`).
- **T024**: [Core] Implement the background worker to poll for new complaints, call the AI service, and create/link issues.

## Phase 4: Frontend Implementation

- **T025**: [Frontend] Implement the user login and signup pages and connect them to the backend API.
- **T026**: [Frontend] Implement the citizen dashboard to display a list of their reported issues.
- **T027**: [Frontend] Implement the issue reporting form to allow citizens to submit new complaints.
- **T028**: [Frontend] Implement the map view using Leaflet to display issue pins fetched from the API.
- **T029**: [Frontend] Implement the department head dashboard to list new issues and allow assignment to staff.
- **T030**: [Frontend] Implement the issue detail view to show all information about a specific issue.

## Phase 5: Integration and Polish

- **T031**: [Test] Write integration tests for the end-to-end issue lifecycle.
- **T032**: [Test] [P] Write unit tests for key business logic in the backend and AI service.
- **T033**: [Docs] [P] Update the `README.md` with detailed instructions on running the project and using the APIs.

### Parallel Execution Example

The following tasks can be executed in parallel:

```bash
# In one terminal, run the contract tests for the backend
npm test -- --testPathPattern=backend/tests/contract

# In another terminal, work on the AI service
cd services/ai-classifier && uvicorn main:app --reload

# In a third terminal, work on the frontend
cd frontend && npm run dev
```