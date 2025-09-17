# Map API Contract

## GET /api/map/pins

Retrieves a list of issues as map pins for a given bounding box.

**Query Parameters**:
- `bbox`: Bounding box to filter issues by location (e.g., `min_lon,min_lat,max_lon,max_lat`).

**Response (Success)**:

```json
[
  {
    "id": "...",
    "lat": 23.6345,
    "lon": 85.3245,
    "category": "Roads",
    "priority": 0.85
  }
]
```
