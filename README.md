# Food Recipe App with Chatbot

A full-stack web application for discovering, sharing, and managing food recipes with an integrated AI chatbot for recipe assistance.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Routes](#api-routes)
- [Usage](#usage)
- [Contributing](#contributing)

## ✨ Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Recipe Management**: Create, read, update, and delete recipes
- **Image Upload**: Upload recipe images with multipart form data
- **Recipe Search**: Browse and search through recipes
- **Chatbot Assistance**: AI chatbot for recipe recommendations and cooking tips
- **Responsive Design**: Mobile-friendly user interface
- **User Dashboard**: Manage your recipes and profile

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.19.2
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **Password Hashing**: bcrypt 6.0.0
- **File Upload**: multer 2.0.2
- **CORS**: cors 2.8.5
- **Environment**: dotenv 17.2.3
- **Dev Tool**: nodemon 3.1.10

### Frontend
- **UI Library**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Routing**: react-router-dom 7.9.4
- **HTTP Client**: axios 1.13.1
- **Icons**: react-icons 5.5.0
- **Type Checking**: ESLint with React plugins

## 📁 Project Structure

```
foodrwithchbotproj/
├── backend/
│   ├── config/
│   │   └── connectionDB.js          # MongoDB connection configuration
│   ├── controller/
│   │   ├── recipe.js                # Recipe business logic
│   │   └── user.js                  # User authentication logic
│   ├── middleware/
│   │   └── auth.js                  # JWT authentication middleware
│   ├── models/
│   │   ├── recipe.js                # Recipe MongoDB schema
│   │   └── user.js                  # User MongoDB schema
│   ├── public/
│   │   └── images/                  # Uploaded recipe images
│   ├── routes/
│   │   ├── recipe.js                # Recipe API endpoints
│   │   └── user.js                  # User API endpoints
│   ├── server.js                    # Express server entry point
│   └── package.json
│
└── frontend/
    └── food-recipe-app/
        ├── src/
        │   ├── components/
        │   │   ├── Footer.jsx
        │   │   ├── InputForm.jsx
        │   │   ├── MainNavigation.jsx
        │   │   ├── Modal.jsx
        │   │   ├── Navbar.jsx
        │   │   └── RecipeItems.jsx
        │   ├── pages/
        │   │   ├── AddRecipe.jsx      # Create new recipe page
        │   │   ├── Chatbot.jsx        # Chatbot interface
        │   │   ├── EditRecipe.jsx     # Edit recipe page
        │   │   └── Home.jsx           # Homepage
        │   ├── App.jsx                # Main App component
        │   ├── main.jsx               # React entry point
        │   ├── App.css
        │   ├── index.css
        │   └── assets/
        ├── public/
        ├── index.html
        ├── package.json
        ├── vite.config.js
        └── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud database)

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## 🔧 Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The backend server will run on `http://localhost:3000`

## 💻 Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/food-recipe-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will typically run on `http://localhost:5173` (Vite default)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📡 API Routes

### User Routes (`/`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /user` - Get user profile (requires auth)

### Recipe Routes (`/recipes`)
- `GET /` - Get all recipes
- `GET /:id` - Get specific recipe
- `POST /` - Create new recipe (requires auth, supports image upload)
- `PUT /:id` - Update recipe (requires auth)
- `DELETE /:id` - Delete recipe (requires auth)

## 📝 Usage

### Adding a Recipe
1. Navigate to "Add Recipe" page
2. Fill in recipe details (name, ingredients, instructions)
3. Upload an optional recipe image
4. Click "Save" to create the recipe

### Editing a Recipe
1. Click edit on your recipe
2. Modify the details
3. Update the image if needed
4. Save changes

### Using the Chatbot
1. Go to the Chatbot page
2. Ask questions about recipes or cooking tips
3. Get AI-powered recipe suggestions and assistance

### Searching Recipes
1. Browse the homepage for all recipes
2. Use the search functionality to filter recipes by name or ingredients

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication:

1. Users register/login to receive a JWT token
2. Token is stored in browser storage
3. Token is included in request headers for protected routes
4. Middleware validates token before allowing access

## 🐛 Troubleshooting

### CORS Errors
- Ensure backend CORS is configured correctly
- Check that frontend and backend URLs match in requests

### Database Connection Issues
- Verify MongoDB URI in `.env` file
- Ensure MongoDB service is running
- Check firewall and network connectivity

### Image Upload Issues
- Verify multer is properly configured
- Check file size limits
- Ensure `public/images/` directory exists and has write permissions

## 📦 Dependencies

See `package.json` files in both backend and frontend directories for complete dependency lists.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

Manuamidal

---

**Note**: This is a full-stack application combining a Node.js/Express backend with a React frontend. Make sure both servers are running for the application to work properly.
