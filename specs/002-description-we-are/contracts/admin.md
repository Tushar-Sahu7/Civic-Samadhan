# Admin API Contract

## POST /api/admin/merge

Manually merges two issues. (Requires admin role)

**Request Body**:

```json
{
  "source_issue_id": "...",
  "destination_issue_id": "..."
}
```

**Response (Success)**:

```json
{
  "message": "Issues merged successfully."
}
```

## POST /api/admin/unmerge

Manually unmerges a complaint from an issue. (Requires admin role)

**Request Body**:

```json
{
  "complaint_id": "..."
}
```

**Response (Success)**:

```json
{
  "message": "Complaint unmerged successfully."
}
```

## GET /api/admin/metrics

Retrieves platform metrics. (Requires admin role)

**Response (Success)**:

```json
{
  "average_resolution_time_hours": 48.5,
  "duplicates_avoided": 152,
  "top_departments": [
    { "department": "Roads", "resolved_issues": 78 },
    { "department": "Water", "resolved_issues": 54 }
  ]
}
```
