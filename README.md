# Movie Discovery Web Application

A modern, responsive **Movie Discovery Web Application** built using **React.js** and **Tailwind CSS**, designed with a clean architecture and professional UI inspired by popular streaming platforms.

## 🔗 Live Demo

[https://movie-app-psi-six-77.vercel.app](https://movie-app-psi-six-77.vercel.app)

---

## 📌 Overview

This application allows users to explore popular movies, search in real time, filter movies by genre, and manage a personal watchlist. The project focuses on usability, performance, and maintainable frontend architecture.

---

## ✨ Features

* Real-time movie search
* Genre-based filtering with custom interactive UI
* Add and remove movies from a watchlist
* Pagination for browsing large datasets
* Fully responsive design (mobile, tablet, desktop)
* Clean and consistent dark-themed user interface

---

## 🛠 Tech Stack

* **React.js** – Component-based UI development
* **Tailwind CSS** – Utility-first styling
* **JavaScript (ES6+)**
* **Context API** – Global state management
* **TMDB API** – Movie data source

---

## 🧱 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Moviecard.jsx
│   ├── GenreFilter.jsx
│   └── Navbar.jsx
├── context/         # Global state management
│   └── WatchListContext.jsx
├── pages/           # Application pages
│   ├── Home.jsx
│   └── WatchList.jsx
├── App.jsx
└── main.jsx
```

---

## ⚙️ Key Implementation Details

* Used **Context API** to manage watchlist and genre data globally
* Implemented conditional rendering for dynamic UI states
* Designed reusable components for scalability
* Integrated TMDB REST API for fetching movie and genre data
* Applied responsive design principles using Tailwind CSS

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

* Node.js (v16 or above)
* npm or yarn

### Installation

```bash
npm install
```

### Run the Application

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## 🌱 Learning Outcomes

* Practical experience with React hooks and Context API
* Building clean, scalable component structures
* Working with third-party APIs
* Implementing professional UI/UX using Tailwind CSS
* Managing application state effectively

---

## 📌 Future Improvements

* Authentication and user profiles
* Persisting watchlist using localStorage or backend
* Advanced filtering and sorting options
* Improved accessibility support

---

## 📄 License

This project is for learning and demonstration purposes.

