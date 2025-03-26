# Todo API

This is a simple Todo API that allows users to perform CRUD operations on tasks. The API provides endpoints to create, fetch, update, and delete tasks.
I have give postman collection in this simply run the program and test using postman.

## Features
- Fetch all tasks with their completion status
- Add a new task
- Update task details
- Delete a task
- Update the completion status of a task

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- MongoDB (running locally or via cloud service like MongoDB Atlas)

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone <this-repo-link>
   cd <this-repo-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=<your-mongodb-connection-string>
     CORS_ORIGIN=http://localhost:3000
     ```
4. Start the server:
   ```sh
   npm start
   ```
   The API will now be running on `http://localhost:5000`.

## API Endpoints

### 1. Get All Tasks
**Endpoint:** `GET /`

**Response Example:**
```json
{
    "message": "task fetched successfully",
    "tasks": [
        { "_id": "660123abcd12345678900001", "title": "Buy groceries", "description": "Milk, eggs, bread", "completed": false }
    ],
    "completed": [
        { "_id": "660123abcd12345678900002", "title": "Finish project", "description": "Complete backend API", "completed": true }
    ]
}
```

### 2. Add a Task
**Endpoint:** `POST /addtask`

**Request Body:**
```json
{
    "title": "Read a book",
    "description": "Read 50 pages of a novel"
}
```
**Response Example:**
```json
{
    "message": "data received successfully",
    "title": "Read a book",
    "description": "Read 50 pages of a novel"
}
```

### 3. Update a Task
**Endpoint:** `PUT /updatetask/:id`

**Request Body:**
```json
{
    "title": "Buy groceries and vegetables"
}
```
**Response Example:**
```json
{
    "message": "task updated successfully"
}
```

### 4. Delete a Task
**Endpoint:** `DELETE /deletetask/:id`

**Response Example:**
```json
{
    "message": "task deleted successfully"
}
```

### 5. Update Task Status
**Endpoint:** `PUT /updatestatus/:id`

**Request Body:**
```json
{
    "completed": true
}
```
**Response Example:**
```json
{
    "message": "status updated successfully"
}
```

## Testing with Postman
A Postman collection is available to test the API:
[Todo API Postman Collection](https://todo-api-9982.postman.co/workspace/11325559-93f6-4962-a953-2d4c9cecdbce/collection/39236614-1f820219-0938-4e87-874a-4b3797f77057?action=share&source=collection_link&creator=39236614)


