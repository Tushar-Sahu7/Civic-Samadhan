# Implementation Plan: Civic Samadhan Platform

**Branch**: `001-we-are-building` | **Date**: 2025-09-13 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-we-are-building/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
This plan outlines the technical implementation for the Civic Samadhan platform, a scalable SaaS solution for civic issue reporting and resolution in Jharkhand. The approach uses a MERN stack with a microservices architecture, leveraging AI for intelligent issue processing. The plan includes two variations: a monolith for rapid prototyping and a microservices architecture for scalability.

## Technical Context
**Language/Version**: Node.js (LTS), Python 3.11, React 18
**Primary Dependencies**: Express, React, React Native, Material-UI (MUI), PostgreSQL, Redis, Docker, Kubernetes
**Storage**: PostgreSQL (primary), Redis (cache), MongoDB (optional for unstructured data)
**Testing**: Jest, React Testing Library, Supertest
**Target Platform**: AWS, Web, iOS, Android
**Project Type**: web/mobile
**Performance Goals**: <2s latency under 10k+ concurrent users
**Constraints**: State-level scalability, RBAC, Indian government data standards, data residency in India, DR/failover support.
**Scale/Scope**: Millions of users, multiple municipalities.

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 3 (frontend, backend, services)
- Using framework directly? Yes
- Single data model? Yes, with DTOs for API contracts.
- Avoiding patterns? Yes, unless proven necessary.

**Architecture**:
- EVERY feature as library? No, this is a full application.
- Libraries listed: N/A
- CLI per library: N/A
- Library docs: N/A

**Testing (NON-NEGOTIABLE)**:
- RED-GREEN-Refactor cycle enforced? Yes
- Git commits show tests before implementation? Yes
- Order: Contract→Integration→E2E→Unit strictly followed? Yes
- Real dependencies used? Yes
- Integration tests for: new libraries, contract changes, shared schemas? Yes
- FORBIDDEN: Implementation before test, skipping RED phase

**Observability**:
- Structured logging included? Yes
- Frontend logs → backend? Yes
- Error context sufficient? Yes

**Versioning**:
- Version number assigned? 1.0.0
- BUILD increments on every change? Yes
- Breaking changes handled? Yes

## Project Structure

### Documentation (this feature)
```
specs/001-we-are-building/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

services/
├── ai-classifier/
└── notification-service/
```

**Structure Decision**: Option 2, with an additional `services` directory for microservices.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - All technical choices are well-defined by the user.

2. **Generate and dispatch research agents**:
   - No research needed as the stack is defined.

3. **Consolidate findings** in `research.md` using format:
   - See `research.md` for details.

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - See `data-model.md`.

2. **Generate API contracts** from functional requirements:
   - See `contracts/issues.json`.

3. **Generate contract tests** from contracts:
   - To be done during implementation.

4. **Extract test scenarios** from user stories:
   - See `quickstart.md`.

5. **Update agent file incrementally** (O(1) operation):
   - N/A for this workflow.

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- See `tasks.md`.

**Ordering Strategy**:
- TDD order: Tests before implementation
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (execute tasks.md following constitutional principles)
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A       | N/A        | N/A                                 |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*