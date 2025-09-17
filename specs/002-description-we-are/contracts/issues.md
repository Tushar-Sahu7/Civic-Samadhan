# Issues API Contract

## GET /api/issues

Retrieves a list of issues, with optional filtering.

**Query Parameters**:
- `bbox` (optional): Bounding box to filter issues by location (e.g., `min_lon,min_lat,max_lon,max_lat`).
- `category` (optional): Filter by issue category.
- `status` (optional): Filter by issue status.

**Response (Success)**:

```json
[
  {
    "issue_id": "...",
    "title": "...",
    "location": {
      "lat": 23.6345,
      "lon": 85.3245
    },
    "category": "Roads",
    "status": "in_progress",
    "priority_score": 0.85
  }
]
```

## GET /api/issues/:id

Retrieves a specific issue by its ID, including linked complaints.

**Response (Success)**:

```json
{
  "issue_id": "...",
  "title": "...",
  "description": "...",
  "location": {
      "lat": 23.6345,
      "lon": 85.3245
  },
  "category": "Roads",
  "status": "in_progress",
  "assigned_staff_id": "...",
  "department_id": "...",
  "priority_score": 0.85,
  "merged_count": 3,
  "linked_complaints": [
    {
      "complaint_id": "...",
      "title": "..."
    }
  ]
}
```

## POST /api/issues/:id/assign

Assigns a staff member to an issue. (Requires admin/department head role)

**Request Body**:

```json
{
  "assigned_staff_id": "..."
}
```

**Response (Success)**:

```json
{
  "message": "Issue assigned successfully."
}
```

## POST /api/issues/:id/status

Updates the status of an issue. (Requires assigned staff role)

**Request Body**:

```json
{
  "status": "resolved",
  "proof_media_url": "https://example.com/resolved.jpg"
}
```

**Response (Success)**:

```json
{
  "message": "Issue status updated successfully."
}
```
