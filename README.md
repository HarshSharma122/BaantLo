# BaantLo

### Travel Expense Management Made Simple

**BaantLo** is a travel expense management SaaS that helps friends and groups manage shared expenses during trips.

Planning a trip with friends often creates confusion around **who paid, who owes, and how much each person should receive or pay back**.

BaantLo solves this by allowing users to create trips, invite friends, record expenses, and automatically calculate the final settlement when the trip ends.

> **Plan Together. Split Easily.**

---

## 🚀 Live Demo

**Live Application:** https://baantlo-coral.vercel.app/

**GitHub Repository:** https://github.com/HarshSharma122/BaantLo

---

## 📸 Screenshots

> Add screenshots of your application here.

### Dashboard

<img width="1891" height="905" alt="dashboard" src="https://github.com/user-attachments/assets/a04c4fb4-6ebc-4ce7-bde1-b3dd07e28062" />


### Create Trip

![Create Trip](./screenshots/create-trip.png)

### Trip Expenses

![Trip Expenses](./screenshots/expense.png)

### Trip Full details

![Settlement](./screenshots/trips.png)

---

## 🎯 Problem

When people travel together, expenses are usually paid by different members.

For example:

- Rahul pays ₹2,000 for the hotel
- Harsh pays ₹1,500 for food
- Ankit pays ₹1,000 for transportation

At the end of the trip, manually calculating everyone's share becomes confusing.

Questions like:

- Who owes money?
- How much does each person owe?
- Who should receive money?
- How should the expenses be divided?

can become difficult to manage.

**BaantLo automates this process.**

---

## 💡 Solution

BaantLo provides a centralized platform where a group can manage all trip-related expenses.

The basic workflow is:

```text
Create Trip
     ↓
Invite Friends
     ↓
Friends Join Trip
     ↓
Add Expenses
     ↓
Track Who Paid
     ↓
Trip Ends
     ↓
Automatic Calculation
     ↓
Final Settlement
```

---

## ✨ Features

### 🧳 Create Trips

Create a trip by adding information such as:

- Trip name
- Destination
- Trip dates
- Trip members

For example:

```text
Trip: Uttarakhand Adventure
Destination: Uttarakhand
Members: 5 Friends
```

---

### 👥 Invite Friends

Trip owners can invite friends by adding their email addresses.

Each invited member can receive a notification and join the trip.

This makes it easy to create a shared expense group before or during the trip.

---

### 💰 Add Expenses

Members can record expenses inside the trip.

Each expense contains information such as:

```text
Expense: Hotel
Amount: ₹5,000
Paid By: Harsh
```

This allows the application to maintain a complete record of trip expenses.

---

### 📊 Automatic Expense Calculation

When the trip is completed, BaantLo calculates the expenses automatically.

The system determines:

- Total trip expense
- Individual contribution
- Individual share
- Who owes money
- Who should receive money

Instead of manually calculating everything, the application generates the final settlement automatically.

---

### 🔐 Authentication

BaantLo includes custom authentication with:

- Sign Up
- Login
- Authentication token
- HTTP cookies
- Protected authenticated requests

The authentication token is stored inside the browser cookie and is used to identify authenticated users.

---

### 🗄️ Database

BaantLo uses **MongoDB Atlas** as its database.

MongoDB was chosen because the application contains entities such as:

```text
Users
Trips
Members
Expenses
```

and MongoDB's document-based structure works well for this type of application.

---

## 🛠️ Tech Stack

### Frontend

- JavaScript / TypeScript
- React
- Next.js
- HTML
- CSS

### Backend

- Next.js API Routes / Server-side APIs
- Node.js
- REST APIs

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- Custom Authentication
- Cookies
- Authentication Tokens

### Deployment

- Vercel

---

## 🏗️ Application Architecture

The application follows a full-stack architecture:

```text
                ┌──────────────────┐
                │      Client      │
                │      Next.js     │
                └────────┬─────────┘
                         │
                         │ HTTP Request
                         ↓
                ┌──────────────────┐
                │   API / Server   │
                │    Next.js       │
                └────────┬─────────┘
                         │
                         │ Database Query
                         ↓
                ┌──────────────────┐
                │   MongoDB Atlas  │
                └──────────────────┘
```

Authentication works through cookies:

```text
User
 ↓
Login
 ↓
Server validates credentials
 ↓
Authentication Token
 ↓
Token stored in Cookie
 ↓
Authenticated Requests
 ↓
Protected Resources
```

---

## 📁 Project Structure

A simplified structure of the application looks like:

```text
BaantLo/
│
├── app/
│   ├── api/
│   ├── _components/
│   ├── dashboard/
│   └── ...
│
├── components/
│
├── models/
│   ├── User
│   ├── Trip
│   ├── Member
│   └── Expense
│
├── lib/
├── utils/
├── types/
│
├── public/
├── .env
├── package.json
│
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HarshSharma122/BaantLo.git
```

### 2. Navigate to the project

```bash
cd baantlo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
AUTH_SECRET=your_auth_secret
```

Add any other environment variables required by the project.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5800
```

---

## 🔄 How BaantLo Works

### Step 1 — Create an Account

A user creates an account using the signup system.

The authentication system generates an authentication token and stores it securely in a browser cookie.

---

### Step 2 — Create a Trip

The user creates a trip.

For example:

```text
Trip Name: Uttarakhand Trip
Location: Uttarakhand
Dates: 10 Nov - 14 Nov
```

---

### Step 3 — Invite Members

The trip owner adds friends using their email addresses.

```text
Harsh
Rahul
Ankit
Priya
```

Each member becomes associated with the trip.

---

### Step 4 — Add Expenses

During the trip, members add their expenses.

Example:

```text
Hotel          ₹5,000    Paid by Harsh
Food           ₹2,000    Paid by Rahul
Transport      ₹3,000    Paid by Ankit
```

---

### Step 5 — Track Expenses

BaantLo maintains the expenses associated with the trip.

The application can determine how much each member has contributed.

---

### Step 6 — End the Trip

Once the trip is completed, the trip can be marked as ended.

BaantLo then calculates the final expense distribution.

---

### Step 7 — Settlement

The system calculates the final balances.

For example:

```text
Harsh   → Receives ₹2,000
Rahul   → Owes ₹1,200
Ankit   → Owes ₹800
```

This eliminates the need for manual calculations.

---

## 🧠 Expense Calculation

The core idea behind the expense calculation is to determine the difference between:

```text
Amount Paid
      -
Individual Share
      =
Final Balance
```

For example:

```text
Total Expense = ₹10,000
Members       = 4

Each person's share = ₹2,500
```

If one member paid ₹5,000:

```text
₹5,000 - ₹2,500 = +₹2,500
```

That member should receive ₹2,500.

If another member paid ₹1,500:

```text
₹1,500 - ₹2,500 = -₹1,000
```

That member owes ₹1,000.

BaantLo uses this balance information to generate the final settlement.

---

## 🔐 Security Considerations

The application includes authentication-based protection for user-specific resources.

Some of the security considerations include:

- Authentication before accessing protected resources
- Token-based user identification
- HTTP cookies for storing authentication information
- Server-side validation
- User-specific trip access
- Environment variables for sensitive configuration
- Database credentials kept outside the source code

> Never commit `.env` or database credentials to GitHub.

---

## 📚 What I Learned

Building BaantLo helped me understand several concepts beyond simply building UI.

### Full-Stack Development

I learned how frontend applications communicate with backend APIs and databases.

### Authentication

I implemented authentication from scratch using cookies and authentication tokens.

### Database Design

I learned how to structure relationships between users, trips, members, and expenses using MongoDB and Mongoose.

### API Development

I created APIs for operations such as:

```text
Create Trip
Add Member
Add Expense
Update Trip
Delete Expense
Get Trip Data
```

### Business Logic

One of the most important parts of this project was implementing the expense calculation logic.

The challenge was not just storing expenses, but converting those expenses into meaningful balances that users can actually use to settle payments.

### Real-World Product Development

This project also taught me how to think beyond individual features and build a complete product flow:

```text
Authentication
      ↓
User
      ↓
Trip
      ↓
Members
      ↓
Expenses
      ↓
Calculation
      ↓
Settlement
```

---

## 🧩 Challenges I Faced

Some of the challenges I worked through while building BaantLo included:

- Designing the database structure
- Managing relationships between trips, members, and expenses
- Implementing authentication using cookies
- Protecting authenticated routes and APIs
- Handling expense calculation logic
- Keeping trip data synchronized with the UI
- Designing a clean user experience for managing expenses
- Handling different users interacting with the same trip

---

## 🚧 Future Improvements

Some features I plan to improve or add in the future:

- [ ] Email notifications
- [ ] Push notifications
- [ ] Multiple expense-splitting methods
- [ ] Settle Up functionality
- [ ] Expense history
- [ ] Trip analytics
- [ ] Budget tracking
- [ ] Export trip expenses as PDF
- [ ] Multi-currency support
- [ ] Better notification system
- [ ] Mobile application

---

## 📈 Project Timeline

**Development Time:** Approximately 1 month

This project was built as a hands-on full-stack development project to understand how a real-world SaaS application works from authentication and database design to business logic and deployment.

---

## 🎯 Why I Built BaantLo

I built BaantLo to solve a problem that frequently occurs during group trips: **managing shared expenses without confusion.**

More importantly, I wanted to build a complete software product rather than just another tutorial project.

Through BaantLo, I practiced:

- Frontend development
- Backend development
- Database design
- Authentication
- API development
- Business logic
- Deployment
- Product thinking

---

## 👨‍💻 About the Developer

Built by **Harsh Sharma**.

I'm a developer interested in building full-stack applications and solving real-world problems through software.

I'm currently focused on improving my skills in:

- Full-Stack Development
- JavaScript / TypeScript
- React / Next.js
- Node.js
- MongoDB
- REST APIs
- Data Structures & Algorithms
- System Design

---

## ⭐ If You Like This Project

If you find BaantLo interesting, consider giving the repository a ⭐ on GitHub.

Feedback and suggestions are always welcome.

---

## 📄 License

This project is currently available for learning and portfolio purposes.

Add your preferred license here if you decide to open-source the project.
