# ForumFlow - Forum Management System

A modern React-based forum management system built with Redux and Redux Saga for efficient state management and asynchronous operations.
This project is built by me to get familiar with Redux, Redux-saga concepts.

## 🚀 Tech Stack

- **React 19.1.0** - Modern React with hooks
- **Redux 5.0.1** - State management
- **Redux Saga 1.3.0** - Side effects management
- **React-Redux 9.2.0** - React bindings for Redux
- **Vite 7.0.0** - Build tool and development server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide React** - Icons library

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # App header component
│   ├── MainDashboard.jsx # Main dashboard container
│   ├── TabNavigation.jsx # Tab navigation component
│   ├── Controls.jsx     # Search and filter controls
│   ├── posts/           # Post-related components
│   │   ├── PostTable.jsx
│   │   ├── PostRow.jsx
│   │   ├── CreatePostModal.jsx
│   │   ├── EditPostModal.jsx
│   │   ├── ViewDetailsModal.jsx
│   │   └── Footer.jsx
│   └── users/           # User-related components
│       ├── UserTable.jsx
│       └── UserRow.jsx
├── store/               # Redux store configuration
│   ├── index.js         # Store configuration
│   ├── actions/         # Redux actions
│   │   ├── actionTypes.js
│   │   └── actionCreators.js
│   ├── reducers/        # Redux reducers
│   │   ├── dashBoardReducer.js
│   │   ├── postReducer.js
│   │   └── userReducer.js
│   └── sagas/           # Redux sagas
│       ├── index.js
│       ├── userSaga.js
│       └── postSaga.js
├── constants/           # Constants and mock data
│   └── mockData.js
├── assets/             # Static assets
└── main.jsx            # App entry point
```

## 🔧 Redux Store Architecture

### Store Configuration (`src/store/index.js`)

The store combines three reducers and applies Redux Saga middleware:

- **userReducer** - Manages user data and user-to-username mappings
- **dashboardReducer** - Handles UI state (active tab, search, modals)
- **postReducer** - Manages posts data

### Reducers

#### Dashboard Reducer (`src/store/reducers/dashBoardReducer.js`)

Manages UI state:

- `activeTab`: Current active tab ('users' or 'posts')
- `searchValue`: Current search input value
- `createPostUI`: Controls create post modal visibility

#### Post Reducer (`src/store/reducers/postReducer.js`)

Manages post-related state:

- `posts`: Array of all posts
- Handles CRUD operations: GET, CREATE, UPDATE, DELETE

#### User Reducer (`src/store/reducers/userReducer.js`)

Manages user-related state:

- `users`: Array of all users
- `userIdToUsernameMap`: Mapping object for quick user lookups

## 🔄 Redux Sagas

### Root Saga (`src/store/sagas/index.js`)

Orchestrates all saga watchers:

- `GET_USERS_FETCH` → `workGetUsersFetch`
- `GET_POSTS_FETCH` → `workGetPostsFetch`
- `CREATE_POST_FETCH` → `workCreatePostFetch`
- `DELETE_POST_FETCH` → `workDeletePostFetch`
- `UPDATE_POST_FETCH` → `workUpdatePostFetch`

### User Saga (`src/store/sagas/userSaga.js`)

Handles user-related async operations:

- **`workGetUsersFetch`**: Fetches users from JSONPlaceholder API
- Creates user ID to username mapping for efficient lookups

### Post Saga (`src/store/sagas/postSaga.js`)

Handles post-related async operations:

- **`workGetPostsFetch`**: Fetches posts from JSONPlaceholder API
- **`workCreatePostFetch`**: Creates new posts via API
- **`workUpdatePostFetch`**: Updates existing posts via API
- **`workDeletePostFetch`**: Deletes posts via API

## 🧩 Component Architecture

### Main Dashboard (`src/components/MainDashboard.jsx`)

Root component that:

- Manages filtered data state
- Implements search functionality
- Dispatches initial data fetch actions
- Renders conditional components based on active tab

### Header (`src/components/Header.jsx`)

Static header component with:

- Application branding
- Gradient background styling
- Logo display with error handling

### Tab Navigation (`src/components/TabNavigation.jsx`)

Tab switching component:

- Displays user and post counts
- Manages active tab state via Redux
- Uses Lucide React icons

### Controls (`src/components/Controls.jsx`)

Search and action controls:

- Search input with real-time filtering
- Create post button (posts tab only)
- Filter functionality

### Data Tables

- **UserTable/UserRow**: Displays user information in tabular format
- **PostTable/PostRow**: Displays posts with CRUD operations
- **Modals**: Create, edit, and view post details

## 🎯 Key Features

1. **Real-time Search**: Search across users and posts with instant filtering
2. **Tab Navigation**: Switch between users and posts views
3. **CRUD Operations**: Full create, read, update, delete for posts
4. **Responsive Design**: Mobile-friendly interface with Tailwind CSS
5. **Modal System**: Create and edit posts via modal dialogs
6. **Error Handling**: Comprehensive error handling in sagas
7. **Loading States**: Managed through Redux actions and sagas

## 📡 API Integration

The application integrates with JSONPlaceholder API:

- **Users**: `https://jsonplaceholder.typicode.com/users/`
- **Posts**: `https://jsonplaceholder.typicode.com/posts/`

All API calls are handled through Redux Sagas with proper error handling.

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Run linting**:
   ```bash
   npm run lint
   ```

## 🎨 Styling

The application uses Tailwind CSS for styling with:

- Responsive grid layouts
- Gradient backgrounds
- Hover effects and transitions
- Component-based utility classes
- Mobile-first design approach

## 🔍 State Management Flow

1. **Component** dispatches action via `useDispatch`
2. **Action** triggers corresponding saga watcher
3. **Saga** performs async operation (API call)
4. **Saga** dispatches success/failure action
5. **Reducer** updates state based on action
6. **Component** re-renders with new state via `useSelector`

## 📝 Action Types

The application uses the following action patterns:

- `*_FETCH`: Triggers saga for async operations
- `*_SUCCESS`: Updates state after successful operation
- `SET_*`: Direct state updates (no async operation)
