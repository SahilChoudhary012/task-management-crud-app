# 🗂️ Task Management CRUD Web App

This web application is a **Task Management System**.

## It allows users to perform full **CRUD** operations on tasks and includes an additional feature: **User Authentication**.

## ✅ Features Implemented

### 1. Front-End

- **Task List View:** Displays all existing tasks.
- **Task Creation Form:** Allows users to add new tasks with fields:
  - Title (required)
  - Description
- **Edit and Delete:** Options to update or remove tasks.
- **Responsive UI:** Built using Tailwind CSS (or Bootstrap).

### 2. Back-End

- **Framework:** Node.js with Express.
- **API Endpoints:**
  - `GET /tasks` – Retrieve all tasks.
  - `POST /tasks` – Create a new task.
  - `PUT /tasks/:id` – Update an existing task.
  - `DELETE /tasks/:id` – Delete a task.
- **Validation:** Ensures that task title is not empty.
- **Database:** Tasks are stored in MongoDB.

### 3. User Authentication (Bonus Feature)

- Users must **register** and **log in** to manage their tasks.
- Implemented using **JWT (JSON Web Tokens)**.
- Each user can access only their own tasks.

---

## 🛠️ Installation

Clone the repository and install dependencies for both frontend and backend:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### Install Front-End

```bash
cd frontend
npm install
```

### Install Back-End

```bash
cd backend
npm install
```

---

## ⚙️ Configuration

Create a `.env` file inside the `backend` directory and add the following:

```env
MONGO_URI=Your MongoDB URI
GMAIL_USERNAME=Your Gmail address
GMAIL_PASSWORD=App password from Google account settings
PORT=8000
JWT_SECRET=thisisasecretkey
```

---

## 🚀 Run the App

### Start Backend Server

```bash
cd backend
nodemon server
```

### Start Frontend Server

```bash
cd frontend
npm start
```

---

## 📌 Notes

- Ensure you have [Node.js](https://nodejs.org/) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) set up.
- Use Gmail's [App Passwords](https://support.google.com/accounts/answer/185833?hl=en) feature to send emails securely.
