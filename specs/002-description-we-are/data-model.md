# Data Model for Civic Samadhan

This document defines the database schema for the Civic Samadhan prototype. The database of choice is PostgreSQL.

## Tables

### `users`

Stores information about all users of the platform.

```sql
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('visitor', 'citizen', 'staff', 'department', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `departments`

Stores information about municipal departments.

```sql
CREATE TABLE departments (
    dept_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255),
    phone VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `staff`

Links users to departments and defines their roles.

```sql
CREATE TABLE staff (
    staff_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    dept_id UUID REFERENCES departments(dept_id) ON DELETE SET NULL,
    role VARCHAR(50) CHECK (role IN ('primary', 'support')),
    shift_info JSONB
);
```

### `complaints`

Stores raw, unverified complaints submitted by citizens.

```sql
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE complaints (
    complaint_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    media_url VARCHAR(255),
    report_time TIMESTAMPTZ DEFAULT NOW(),
    user_id UUID REFERENCES users(user_id) ON DELETE SET NULL,
    location GEOMETRY(Point, 4326),
    category VARCHAR(100),
    raw_priority_score JSONB,
    linked_issue_id UUID
);

CREATE INDEX idx_complaints_location ON complaints USING GIST (location);
CREATE INDEX idx_complaints_description ON complaints USING GIN (to_tsvector('english', description));
```

### `issues`

Stores verified, actionable issues created from one or more complaints.

```sql
CREATE TABLE issues (
    issue_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location GEOMETRY(Point, 4326),
    generation_time TIMESTAMPTZ DEFAULT NOW(),
    category VARCHAR(100),
    progress_status VARCHAR(50) DEFAULT 'acknowledged' CHECK (progress_status IN ('acknowledged', 'staff_assigned', 'in_progress', 'resolved')),
    assigned_staff_id UUID REFERENCES staff(staff_id) ON DELETE SET NULL,
    department_id UUID REFERENCES departments(dept_id) ON DELETE SET NULL,
    priority_score NUMERIC(3, 2) CHECK (priority_score >= 0 AND priority_score <= 1),
    merged_count INT DEFAULT 1,
    metadata JSONB
);

CREATE INDEX idx_issues_location ON issues USING GIST (location);
```

### `feedbacks`

Stores feedback from citizens on resolved issues.

```sql
CREATE TABLE feedbacks (
    feedback_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    issue_id UUID REFERENCES issues(issue_id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(user_id) ON DELETE SET NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comments TEXT,
    proof_media_url VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `ai_insights`

Stores the output of the AI microservice for each complaint.

```sql
CREATE TABLE ai_insights (
    insight_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    complaint_id UUID REFERENCES complaints(complaint_id) ON DELETE CASCADE,
    suggested_category VARCHAR(100),
    confidence NUMERIC(3, 2),
    priority_components JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `audit_log`

A generic table for logging actions within the system.

```sql
CREATE TABLE audit_log (
    log_id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    action VARCHAR(255) NOT NULL,
    target_id VARCHAR(255),
    details JSONB,
    log_time TIMESTAMPTZ DEFAULT NOW()
);
```
