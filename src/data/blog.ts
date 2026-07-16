export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-mern-stack',
    title: 'Getting Started with the MERN Stack',
    description:
      'A comprehensive guide to building your first full-stack application with MongoDB, Express, React, and Node.js.',
    date: '2025-11-15',
    tags: ['MERN', 'Full Stack', 'JavaScript'],
    content: `
The MERN stack (MongoDB, Express.js, React, Node.js) is one of the most popular technology stacks for building modern web applications. In this guide, I'll walk you through the process of setting up and building your first MERN application.

## Why MERN?

The MERN stack is popular because it uses JavaScript across the entire application — from the database to the server to the client. This means you only need to know one programming language to build full-stack applications.

## Setting Up the Backend

Start by initializing a Node.js project:

\`\`\`bash
mkdir my-mern-app
cd my-mern-app
npm init -y
npm install express mongoose cors dotenv
\`\`\`

Create your Express server:

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
\`\`\`

## Building the Frontend with React

On the frontend side, create a React app and set up your components. Use Axios to communicate with your backend API.

\`\`\`bash
npx create-react-app client
cd client
npm install axios react-router-dom
\`\`\`

## Conclusion

The MERN stack provides a powerful and flexible foundation for building modern web applications. With JavaScript at every layer, you can build full-stack applications efficiently.
    `,
  },
  {
    slug: 'understanding-jwt-authentication',
    title: 'Understanding JWT Authentication',
    description:
      'Learn how JSON Web Tokens work and how to implement secure authentication in your Node.js applications.',
    date: '2025-10-20',
    tags: ['Authentication', 'Security', 'Node.js'],
    content: `
JSON Web Tokens (JWT) are an open standard for securely transmitting information between parties as a JSON object. They are commonly used for authentication and authorization in web applications.

## How JWT Works

When a user logs in, the server creates a JWT and sends it to the client. The client then sends this token with every subsequent request, allowing the server to verify the user's identity without storing session data.

## JWT Structure

A JWT consists of three parts separated by dots:

1. **Header** - Contains the token type and signing algorithm
2. **Payload** - Contains the claims (user data, expiration, etc.)
3. **Signature** - Verifies the token hasn't been tampered with

## Implementing JWT in Node.js

\`\`\`javascript
const jwt = require('jsonwebtoken');

// Sign a token
const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// Verify a token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
\`\`\`

## Best Practices

- Always use HTTPS in production
- Store tokens securely (httpOnly cookies are recommended)
- Implement token expiration and refresh mechanisms
- Never store sensitive data in the payload

## Conclusion

JWT provides a stateless, scalable approach to authentication that works well with modern web and mobile applications.
    `,
  },
  {
    slug: 'building-restful-apis-with-express',
    title: 'Building RESTful APIs with Express.js',
    description:
      'Best practices and patterns for designing and implementing scalable REST APIs using Express.js.',
    date: '2025-09-10',
    tags: ['API', 'Express.js', 'Backend'],
    content: `
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.

## Setting Up Express

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.get('/api/users', getUsers);
app.post('/api/users', createUser);
app.get('/api/users/:id', getUserById);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## RESTful API Design Principles

1. **Use proper HTTP methods** - GET for reading, POST for creating, PUT/PATCH for updating, DELETE for removing
2. **Use meaningful resource names** - /api/users, /api/posts, /api/comments
3. **Implement proper error handling** - Return appropriate status codes and error messages
4. **Add pagination for list endpoints** - Support limit/offset or cursor-based pagination
5. **Version your APIs** - Use URL versioning like /api/v1/

## Error Handling Middleware

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});
\`\`\`

## Conclusion

Building RESTful APIs with Express.js is straightforward when you follow established patterns and best practices. Focus on clean routing, proper error handling, and consistent response formats.
    `,
  },
]
