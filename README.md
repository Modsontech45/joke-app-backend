# Jokes API

A simple RESTful API for retrieving, adding, updating, and deleting jokes.

## Features
- Get a random joke
- Get a joke by ID
- Filter jokes by type
- Add, update, and delete jokes

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jokes-api.git
   cd jokes-api
2. Install dependencies:
   ```bash
   npm install
    ```

3. Run the server:

    ```bash
   node index.js

    ```

API Endpoints
Get a Random Joke


GET /random
Get a Specific Joke

GET /jokes/:id
Filter Jokes by Type

GET /filter?type=<jokeType>
Add a Joke

POST /jokes
Body: { "text": "Joke text", "type": "Joke type" }
Update a Joke



PUT /jokes/:id
Body: { "text": "New joke text", "type": "New joke type" }


Delete a Joke
DELETE /jokes/:id


Delete All Jokes (Admin Only)
DELETE /all?key=your_master_key
Deployment
This API is hosted on Render.

