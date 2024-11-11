# Social Network API

## Description
A robust REST API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Built with MongoDB, Express.js, and Mongoose ODM, this API is designed to handle large amounts of unstructured data efficiently.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Installation
```bash
# Clone the repository
git clone [repository-link]

# Navigate to the project directory
cd social-network-api

# Install dependencies
npm install

# Start the server
npm start
```

## Usage
After starting the server:
1. The Mongoose models will sync to the MongoDB database
2. Use Insomnia or any API client to test the API endpoints
3. The server will be running on `localhost:3001` by default

## API Routes

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Friends
- `POST /api/users/:userId/friends/:friendId` - Add friend to user's friend list
- `DELETE /api/users/:userId/friends/:friendId` - Remove friend from user's friend list

### Thoughts
- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get single thought by ID
- `POST /api/thoughts` - Create new thought
- `PUT /api/thoughts/:id` - Update thought by ID
- `DELETE /api/thoughts/:id` - Delete thought by ID

### Reactions
- `POST /api/thoughts/:thoughtId/reactions` - Create reaction for a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete reaction from a thought

## Features
- User management (CRUD operations)
- Friend list management
- Thought sharing and management
- Reaction system for thoughts
- Formatted timestamps
- NoSQL database for flexible data structure

## Technology Stack
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JavaScript Date Library (optional)

## Demo
https://app.screencastify.com/v3/watch/24YuJ3wDllGmIMjHHWWX

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
