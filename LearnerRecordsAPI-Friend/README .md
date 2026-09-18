# Learner Records API

A REST API built with Express and MongoDB for managing learner records.

## Setup

1. Install Node.js and MongoDB.
2. Run `npm install`.
3. Start MongoDB locally.
4. Run `npm start`.

The API runs at `http://localhost:3000` by default.

## Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/learners` | Add a learner |
| GET | `/learners` | List all learners |
| GET | `/learners/:id` | Get one learner |
| PATCH | `/learners/:id` | Update a learner |
| DELETE | `/learners/:id` | Delete a learner |

## Example request

```json
{
  "fullName": "Kiran Mehta",
  "age": 22,
  "program": "Information Technology",
  "emailAddress": "kiran.mehta@example.com"
}
```

Set `PORT` or `DATABASE_URL` environment variables to override the defaults.