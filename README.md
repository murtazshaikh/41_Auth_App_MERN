# MERN Auth App

A simple full-stack authentication application built with the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It features login/signup functionality, JWT-based authentication, protected frontend routes, and basic product fetching.

## 🛠️ Tech Stack

- **Frontend:** React (with TypeScript), React Router, React Toastify  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Token (JWT)  
- **Styling:** CSS (custom or framework of your choice)

## 📂 Project Structure

```
client/              # React frontend
  ├── src/
  │   ├── pages/     # Login, Signup, Home
  │   ├── utils/     # Toast handler utils
  │   ├── App.tsx    # Route definitions
  │   ├── RefreshHandler.tsx
server/              # Node.js backend
  ├── routes/        # Auth and product routes
  ├── models/        # User/Product schemas
  ├── middleware/    # Auth middleware
  └── index.js       # Entry point
```

## 🚀 Features

- ✅ User Signup & Login  
- ✅ JWT Authentication  
- ✅ Protected Routes on Frontend  
- ✅ Toast Notifications (Success/Error)  
- ✅ Product List Fetch (for authenticated users)  
- ✅ Logout with token cleanup

## 🔧 Getting Started

### Prerequisites

- Node.js  
- npm or yarn  
- MongoDB (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-auth-app.git
cd mern-auth-app
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
```

Start the backend server:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev    # or npm start depending on your setup
```

## 🌐 API Endpoints

| Method | Endpoint    | Description              |
|--------|-------------|--------------------------|
| POST   | `/signup`   | Register a new user      |
| POST   | `/login`    | Authenticate user        |
| GET    | `/products` | Get product list (auth)  |

## 🔐 Auth Flow

- User signs up or logs in  
- JWT token is stored in `localStorage`  
- `RefreshHandler.tsx` checks for token on app load  
- Private routes redirect unauthorized users  
- Logout clears token and user session

## 📦 Packages Used

- `react-router-dom`  
- `react-toastify`  
- `jsonwebtoken`  
- `bcryptjs`  
- `mongoose`  
- `cors`, `dotenv`, `express`

## 🧪 Future Improvements

- Form validation with libraries like Yup/Formik  
- Password reset functionality  
- Role-based access (admin/user)  
- Unit and integration tests

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Questions?

Feel free to open an issue or reach out via [GitHub](https://github.com/your-username).
