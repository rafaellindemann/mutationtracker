# Mutation Tracker

A tool to track mutation progress for breeders at Ark Survival Ascended.

## Features

- **Firebase Authentication**: Sign in with Google (more providers coming soon)
- **Firestore Integration**: Ready to store breeding data, creature lines, and mutation attempts
- **Protected Routes**: Secure app area accessible only after login
- **Landing Page**: Pre-login introduction to the tool
- **Context API**: Global state and auth managed via React Context
- **React Router**: Navigate between landing and app areas

## Tech Stack

- **React 18** + **Vite**
- **React Router DOM** for routing
- **Firebase** for authentication and Firestore database
- **CSS variables** for consistent theming (see `src/index.css`)

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Firebase**:
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Google authentication in Firebase Console > Authentication > Sign-in method
   - Create a Firestore database in Firebase Console > Firestore Database
   - Copy `.env.example` to `.env` and fill in your Firebase config values:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation with login/logout
│   └── ProtectedRoute.jsx   # Route guard for authenticated users
├── contexts/
│   ├── AuthContext.jsx      # Firebase auth state and methods
│   └── GlobalContext.jsx    # Additional global state
├── pages/
│   ├── LandingPage.jsx      # Pre-login landing page
│   ├── MutationTracker.jsx  # Main app (post-login)
│   └── NotFound.jsx         # 404 page
├── router/
│   └── routes.jsx           # Route configuration
└── firebase/
    └── config.js            # Firebase initialization
```

## Next Steps

- Connect Firestore collections for creatures, parents, and mutation attempts
- Add forms for breeding batch data entry
- Implement tribe collaboration features
- Add more authentication providers (email/password, GitHub, etc.)

## License

MIT
