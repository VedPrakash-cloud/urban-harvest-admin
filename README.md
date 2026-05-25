🌾 Urban Harvest - Responsive Admin Dashboard

    Urban Harvest is a modern, clean, and fully responsive Admin/Store Management Dashboard built for a fictional food delivery and grocery platform. This project was developed as part of the UI/UX Developer Fresher Assignment to demonstrate responsive design principles, clean component structure, and global state management.

🚀 Live Features Implemented

1. Modern Login Page
    Secure Flow: Structured form with Email & Password validation handles.
    UX Remember Me: Built using native `localStorage` synchronization. If checked, the session persists across browser refreshes and tab closures without needing a backend token.
    Auto-Redirect: Authenticated users are automatically guarded and pushed to the dashboard layout.

 2. Analytical Dashboard
    Dynamic Sidebar: Responsive sliding overlay drawer on mobile viewports triggered via hamburger actions, adapting to a permanent fixed bar on desktop viewports ($1024\text{px}$ and up).
    Summary Metrics: High-fidelity visual cards showing operational stats like Total Orders, Revenue, Active Users, and Pending Deliveries.
    Data Presentation: Clean structured table mapping recent customer transactions equipped with responsive overflow styling vectors (`overflow-x-auto`).

3. Inventory & Product Management
    Global State Sync: Fully powered by **Redux Toolkit (`@reduxjs/toolkit`)**. Adding a new product immediately populates state tables globally.
    Instant Filters: Interactive search query field combined with stock status dropdowns (*All, Available, Out of Stock*) updates views in real-time.
    Form Modals: Beautiful inline overlay forms styled with backdrop-blur metrics (`backdrop-blur-xs`) for sleek UX transitions.


🛠️ Tech Stack & Architecture 
    Frontend Framework: React JS (v19/v18)
    State Management: Redux Toolkit & React-Redux
    Routing: React Router DOM (v6)
    Styling Engine: Tailwind CSS
    Design Pattern: Atomic folder architecture split into clean reusable layout slots (`/components`, `/pages`, `/redux`).

Install Dependencies
    npm install
        (This will install all the dependencies like @reduxjs/toolkit, react,redux, react-router-dom, and  Tailwindcss)
    npm run dev


📂 Project Directory Map
    src/
    ├── components/
    │   ├── Card.jsx
    │   ├── Header.jsx
    │   └── Sidebar.jsx
    ├── pages/
    │   ├── Login.jsx
    │   ├── Dashboard.jsx
    │   └── ProductManagement.jsx
    ├── redux/
    │   ├── store.js
    │   ├── authSlice.js
    │   └── productSlice.js
    ├── App.jsx
    ├── main.jsx
    └── index.css
