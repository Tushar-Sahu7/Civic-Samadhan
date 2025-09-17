# Complaints API Contract

## POST /api/complaints

Submits a new complaint.

**Request Body**:

```json
{
  "title": "Large pothole on Main Street",
  "description": "A large and dangerous pothole has formed near the intersection of Main and 1st.",
  "media_url": "https://example.com/pothole.jpg",
  "lat": 23.6345,
  "lon": 85.3245
}
```

**Response (Success)**:

```json
{
  "complaint_id": "...",
  "message": "Complaint submitted successfully."
}
```

## GET /api/complaints/:id

Retrieves a specific complaint by its ID.

**Response (Success)**:

```json
{
  "complaint_id": "...",
  "title": "Large pothole on Main Street",
  "description": "...",
  "media_url": "...",
  "report_time": "...",
  "user_id": "...",
  "location": {
    "lat": 23.6345,
    "lon": 85.3245
  },
  "category": "Roads",
  "linked_issue_id": "..."
}
```

## GET /api/complaints

Retrieves a list of complaints, with optional filtering by `user_id`.

**Query Parameters**:
- `user_id` (optional): Filter complaints by the user who reported them.

**Response (Success)**:

```json
[
  {
    "complaint_id": "...",
    "title": "...",
    "status": "..."
  }
]
```
