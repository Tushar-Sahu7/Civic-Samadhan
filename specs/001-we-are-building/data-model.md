# Data Model

This document defines the core data entities for the Civic Samadhan platform, reflecting the distinction between a citizen's "Complaint" and an official "Issue".

## Entity: Complaint
- **Description**: A report submitted by a citizen. This is the initial, raw input.
- **Attributes**:
    - `complaint_id`: UUID (Primary Key)
    - `reporter_id`: UUID (Foreign Key to User)
    - `title`: String
    - `description`: Text
    - `location`: GeoJSON
    - `status`: Enum (PENDING_AI_ANALYSIS, MERGED, NEW_ISSUE_CREATED)
    - `issue_id`: UUID (Foreign Key to Issue, nullable)
    - `created_at`: Timestamp
    - `updated_at`: Timestamp

## Entity: Issue
- **Description**: An official issue recognized by the government, either generated from a new complaint or an existing issue that other complaints are merged into.
- **Attributes**:
    - `issue_id`: UUID (Primary Key)
    - `title`: String
    - `description`: Text
    - `location`: GeoJSON
    - `status`: Enum (OPEN, IN_PROGRESS, RESOLVED, CLOSED)
    - `category`: String
    - `assignee_id`: UUID (Foreign Key to User, nullable)
    - `department_id`: UUID (Foreign Key to Department, nullable)
    - `created_at`: Timestamp
    - `updated_at`: Timestamp

## Entity: User
- **Description**: Represents any individual interacting with the system.
- **Attributes**:
    - `user_id`: UUID (Primary Key)
    - `username`: String (unique)
    - `password_hash`: String
    - `email`: String (unique)
    - `role`: Enum (CITIZEN, STAFF, MANAGER, ADMIN)
    - `created_at`: Timestamp
    - `updated_at`: Timestamp

## Entity: Department
- **Description**: Represents a municipal department.
- **Attributes**:
    - `department_id`: UUID (Primary Key)
    - `name`: String
    - `municipality`: String

## Entity: Media
- **Description**: Stores media files associated with a complaint.
- **Attributes**:
    - `media_id`: UUID (Primary Key)
    - `complaint_id`: UUID (Foreign Key to Complaint)
    - `file_url`: String
    - `media_type`: Enum (IMAGE, VOICE, VIDEO)
    - `created_at`: Timestamp