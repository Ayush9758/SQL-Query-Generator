# SQL Query Generator 🤖🔮

An intelligent full-stack application that translates plain English instructions into optimized, structured SQL queries using the OpenAI API. Built with a robust Node.js/Express backend and a responsive React frontend, this tool helps developers, data analysts, and non-technical users interact with relational databases effortlessly.

---

## 🚀 Features

* **Natural Language to SQL:** Convert complex English text directly into executable SQL code.
* **Query Optimization:** Automatically rewrites and suggests improvements for your queries.
* **Database Schema Awareness:** Tailors generated queries to your specific tables and columns.
* **Query Explanations:** Breaks down what the generated SQL query actually does in plain English.
* **Interactive Visualizer:** Built-in charts and table layouts to preview query analytics.
* **History & Dashboard:** Secure user authentication allowing users to save, review, and track past prompt histories.

---

## 🛠️ Tech Stack

### Backend

* **Runtime:** Node.js
* **Framework:** Express.js
* **AI Integration:** OpenAI API
* **Database & Storage:** MongoDB (User/History Tracking), Cloudinary (Visual Assets)
* **Caching & Optimization:** Redis
* **Development Tools:** Nodemon

### Frontend

* **Framework:** React.js (Vite workflow)
* **Styling:** Tailwind CSS
* **Linting:** Oxlint
* **HTTP Client:** Axios

---

## 📂 Project Structure

```text
SQL-Query-Generator/
├── backend/
│   ├── src/
│   │   ├── config/          # Database, OpenAI, Redis, and Cloudinary setups
│   │   ├── controllers/     # AI, Auth, Analytics, and History logic
│   │   ├── middleware/      # Auth, Rate Limiting, Error handling, and Loggers
│   │   ├── models/          # MongoDB schemas (User, PromptHistory, etc.)
│   │   ├── prompts/         # Customized OpenAI system prompts
│   │   └── routes/          # API endpoint routes
│   └── server.js            # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/      # UI components (SQLViewer, TableViewer, Charts)
│   │   ├── context/         # Global application state management
│   │   ├── pages/           # Dashboard, Analytics, Playground, History, Landing
│   │   └── services/        # API request abstractions (Axios)
│   └── index.html
└── .gitignore               # Keeps node_modules and .env secrets safe

```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Ayush9758/SQL-Query-Generator.git
cd SQL-Query-Generator

```

### 2. Backend Setup

1. Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install

```


2. Create a `.env` file in the `backend/` folder and populate it with your environment keys:
```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
REDIS_URL=your_redis_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
JWT_SECRET=your_jwt_signing_secret

```


3. Start the development server:
```bash
npm run dev

```



### 3. Frontend Setup

1. Open a new terminal window, navigate to the frontend directory, and install dependencies:
```bash
cd ../frontend
npm install

```


2. Create a `.env` file in the `frontend/` folder:
```ini
VITE_API_BASE_URL=http://localhost:5000/api

```


3. Run the frontend application:
```bash
npm run dev

```



---

## 🔒 Security Note

> **Important:** Keep your credentials secure. Never push `.env` files or your local `node_modules` folders to a public version control history. This repository utilizes built-in GitHub Push Protection and standard `.gitignore` rules to safeguard private configurations.

