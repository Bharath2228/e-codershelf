# e-CoderShelf

An online bookshelf web app for developers to browse, manage, and track coding books and resources.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Authors and Contributors](#authors-and-contributors)

---

## About the Project

e-CoderShelf is a React-based web application that provides developers with a centralized platform to browse and manage a curated collection of coding books and resources. It features user authentication powered by json-server-auth, allowing each user to have a personalized experience with their own bookshelf. The live application is deployed at [e-codershelf.netlify.app](https://e-codershelf.netlify.app/).

The project solves the common problem of developers having no structured way to discover, track, and organize the programming books and resources they want to read or have already read. By combining a mock REST backend with a clean React frontend, it delivers a full browsing and account experience without the overhead of a production backend.

---

## Key Features

- **User Authentication:** Register and log in securely using json-server-auth with JWT-based token handling.
- **Book Browsing:** Browse a curated collection of coding books and resources served from a local JSON database.
- **Client-Side Routing:** Multi-page navigation using React Router DOM v6 with clean URL-based routes.
- **Toast Notifications:** Real-time feedback for user actions such as login, logout, and errors using react-toastify.
- **Responsive UI:** Fully responsive layout styled with Tailwind CSS and Bootstrap Icons.
- **Netlify Deployment:** Production build deployed and hosted on Netlify with redirect rules configured via `netlify.toml`.

---

## Tech Stack

| Layer         | Technology                                              |
|---------------|---------------------------------------------------------|
| Language      | JavaScript                                              |
| Framework     | React 18                                                |
| Libraries     | React Router DOM v6, react-toastify                     |
| Auth          | json-server-auth                                        |
| UI/Styling    | Tailwind CSS, Bootstrap Icons, Google Fonts (Roboto)    |
| Database      | json-server (mock REST API)                             |
| Cloud/Hosting | Netlify                                                 |

---

## Installation

### Prerequisites

- Node.js 18 or higher — verify with `node --version`
- npm — verify with `npm --version`

### Steps

1. Clone the repository
```bash
   git clone https://github.com/Bharath2228/e-codershelf.git
   cd e-codershelf
```

2. Install dependencies
```bash
   npm install
```

3. Start the json-server mock backend
```bash
   npx json-server-auth --watch data/db.json --port 8000
```

4. Start the React development server
```bash
   npm start
```

---

## Usage

### Running the Project
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app requires the json-server-auth backend running on port 8000 simultaneously for authentication and data to work correctly. Register an account or log in to access the bookshelf.

---

## Project Structure
```
e-codershelf/
├── data/                        # JSON database files served by json-server
├── public/                      # Static assets and index.html
├── src/
│   ├── assets/                  # Images, icons, and static media files
│   ├── components/              # Reusable UI components
│   │   ├── Elements/            # Small standalone UI elements (buttons, inputs, etc.)
│   │   ├── Layouts/             # Page layout wrappers (navbar, footer, etc.)
│   │   ├── Others/              # Miscellaneous shared components
│   │   └── Sections/            # Larger composed UI sections used across pages
│   ├── context/                 # React context providers for global state
│   ├── hooks/                   # Custom React hooks
│   ├── pages/                   # Individual page views
│   │   ├── Cart/                # Shopping cart page
│   │   │   └── components/      # Components specific to the Cart page
│   │   ├── Dashboard/           # User dashboard page
│   │   │   └── components/      # Components specific to the Dashboard page
│   │   ├── Home/                # Home/landing page
│   │   │   └── components/      # Components specific to the Home page
│   │   ├── Order/               # Order management page
│   │   │   └── components/      # Components specific to the Order page
│   │   └── Products/            # Products listing and detail page
│   │       └── components/      # Components specific to the Products page
│   ├── reducers/                # useReducer logic for state management
│   ├── routes/                  # Route definitions and protected route logic
│   └── services/                # API call functions and json-server interactions
├── .env                         # Environment variables
├── netlify.toml                 # Netlify deployment and redirect configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

---

## Authors and Contributors

**Bharath** — [@Bharath2228](https://github.com/Bharath2228)
