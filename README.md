# Task Manager App

A full-stack **Task Management Application** built as part of a Full Stack Developer technical assessment.
The app allows users to securely register, log in, and manage their own tasks with search, filtering, and pagination.

---

## 🚀 Live Demo

Frontend (Vercel)
https://task-manager-app-one-snowy.vercel.app

Backend API (Render)
https://task-manager-backend-whwm.onrender.com

GitHub Repository
https://github.com/DiptanshuVishwa/task-manager-app

---

## 🧰 Tech Stack

Frontend

* React (Vite)
* Axios
* React Router
* Tailwind CSS

Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication
* bcrypt password hashing

Security

* HTTP-only cookies
* AES encryption for sensitive fields
* Input validation
* Protected routes

Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## ✨ Features

Authentication

* User registration
* User login
* JWT-based authentication
* Secure HTTP-only cookies

Task Management

* Create tasks
* View tasks
* Delete tasks
* Filter tasks by status
* Search tasks by title
* Pagination support

Security

* Password hashing using bcrypt
* Encrypted task description using AES
* Protected backend routes
* Users can access only their own tasks

---

## 🌐 Live Demo

Frontend:
https://task-manager-app-one-snowy.vercel.app

Backend API:
https://task-manager-backend-whwm.onrender.com

GitHub Repository:
https://github.com/DiptanshuVishwa/task-manager-app


## 📁 Project Structure

```
task-manager-app
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
└── README.md
```

## ⚙️ Local Setup

Clone the repository

git clone https://github.com/DiptanshuVishwa/task-manager-app.git

cd task-manager-app

---

### Backend Setup

cd backend

npm install

Create `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
AES_SECRET=your_encryption_key

Run server:

npm run dev

---

### Frontend Setup

cd frontend

npm install

npm run dev

---

## 📡 API Endpoints

Authentication

POST /api/auth/register
Register a new user

POST /api/auth/login
Login user and create authentication cookie

POST /api/auth/logout
Logout user

---

Tasks

GET /api/tasks
Fetch user tasks with pagination

POST /api/tasks
Create new task

PUT /api/tasks/:id
Update task

DELETE /api/tasks/:id
Delete task

---

## 🛡 Security Practices

* Passwords stored using bcrypt hashing
* Authentication using JWT
* HTTP-only cookies to prevent XSS attacks
* AES encryption for sensitive task data
* Users can only access their own tasks

---

## 📈 Future Improvements

* Task editing functionality
* Task completion toggle
* Dark mode UI
* Rate limiting
* Refresh tokens for authentication

---

## 👨‍💻 Author

Diptanshu Vishwa
Computer Science Student | Full-Stack Developer

GitHub:
https://github.com/DiptanshuVishwa
