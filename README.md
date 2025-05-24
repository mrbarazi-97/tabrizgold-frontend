# Tabriz Gold E-commerce Platform

A full-stack e-commerce platform for a luxury jewelry store, featuring both frontend and backend implementations.

## Project Structure

The project is divided into two main directories:

### Frontend (`/frontend`)
- Next.js based frontend application
- Persian (Farsi) interface with RTL support
- Responsive design with Tailwind CSS
- Vazirmatn font integration
- Product showcase and shopping cart functionality

### Backend (`/backend`)
- Node.js/Express.js REST API
- MongoDB database
- JWT authentication
- Product and order management
- User account handling

## Getting Started

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

3. Start the development server:
```bash
npm run dev
```

## Development

- Frontend runs on: http://localhost:3000
- Backend API runs on: http://localhost:5000

## Technologies Used

- Frontend:
  - Next.js
  - React
  - Tailwind CSS
  - TypeScript

- Backend:
  - Node.js
  - Express
  - MongoDB
  - JWT Authentication
