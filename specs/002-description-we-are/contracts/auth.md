# Auth API Contract

## POST /api/auth/signup

Registers a new citizen user.

**Request Body**:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+911234567890",
  "password": "supersecretpassword"
}
```

**Response (Success)**:

```json
{
  "message": "User created successfully. Please verify your email."
}
```

## POST /api/auth/login

Authenticates a user and returns a JWT.

**Request Body**:

```json
{
  "email": "john.doe@example.com",
  "password": "supersecretpassword"
}
```

**Response (Success)**:

```json
{
  "token": "ey...",
  "user": {
    "user_id": "...",
    "name": "John Doe",
    "role": "citizen"
  }
}
```
