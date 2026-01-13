# 🛠️ assignment-service-hive – Backend

Backend for **Service Hive**, a gig marketplace platform where users can post gigs, freelancers can bid on them, and clients can hire **exactly one freelancer per gig**.

Built with a focus on **security**, **clean architecture**, and **real-world business logic**.

---

## 🚀 Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Mongoose**  
- **JWT (JSON Web Tokens)**  
- **bcrypt**  
- **cookie-parser**  
- **CORS**  
- **Bun / Node**

---

## ✨ Features

### 🔐 Authentication
- User Registration  
- User Login  
- Password hashing with **bcrypt**  
- **JWT-based authentication**  
- Secure **HttpOnly cookies**  
- Protected routes using **authentication middleware**

### 💼 Gigs
- Create a gig (authenticated users)  
- Fetch all **open** gigs  
- Search gigs by title  
- Fetch single gig by ID  
- Gig status management: `open`, `assigned`

### 📝 Bidding
- Freelancers can bid on gigs  
- Prevents users from bidding on their **own** gigs  
- Prevents **duplicate bids** on the same gig  
- Bid status lifecycle:
  - `pending`
  - `hired`
  - `rejected`

### 🏆 Hiring Logic
- Only **gig owner** can hire  
- Hire **exactly one freelancer** per gig  
- Automatically **rejects all other bids**  
- Updates gig status to `assigned`  
- Prevents **re-hiring** once assigned

---

## 🗂️ Project Structure
```
src/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── gigController.js
│   └── bidController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Gig.js
│   └── Bid.js
├── routes/
│   ├── authRoutes.js
│   ├── gigRoutes.js
│   └── bidRoutes.js
├── app.js
└── index.js
```

---

## 🔐 Authentication Flow

1. User **logs in** or **registers**  
2. Backend generates a **JWT**  
3. JWT is stored in an **HttpOnly cookie**  
4. Protected routes verify the token via **middleware**  
5. Authenticated user is attached to `req.user`

---

## 🌐 Environment Variables

Create a `.env` file in the backend root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
# 📦 Installation & Setup
1️⃣ Install dependencies
bash
Copy
```
npm install
```

2️⃣ Start the server
bash
Copy
```
npm run dev
```

Server will run on:
👉 http://localhost:5000
🔌 API Endpoints Overview
🔐 Auth

    POST /api/auth/register – Register user
    POST /api/auth/login – Login user
    GET /api/auth/me – Get current logged-in user

## 💼 Gigs

    POST /api/gigs – Create gig (protected)
    GET /api/gigs – Get all open gigs
    GET /api/gigs/:id – Get gig by ID

## 📝 Bids

    POST /api/bids – Place a bid (protected)
    GET /api/bids/:gigId – View bids (owner only)
    PATCH /api/bids/:bidId/hire – Hire freelancer (owner only)

## 🧠 Key Design Decisions
  HttpOnly cookies used instead of localStorage for security
   Business rules enforced on backend (ownership, permissions)
 Clear separation of concerns (controllers, routes, models)
  Automatic rejection of bids after hiring
  No unnecessary data exposure
