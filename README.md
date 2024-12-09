# Torus Innotech Dashboard

## Overview
Modern React dashboard with TypeScript, Redux, and Tailwind CSS

## Authentication
- **Credentials**
  ```
  Email: admin@example.com
  Password: password
  ```

## Tech Stack
- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- React Router

## Redux Architecture

### Type Definitions
```typescript
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalUsers: number;
}

interface AnalyticsState {
  metrics: AnalyticsMetrics;
  registrationTrend: RegistrationTrendData[];
  userRegionDistribution: UserRegionDistribution[];
}
```

### Project Structure
```
src/
├── redux/
│   ├── store.ts             # Redux store
│   ├── userSlice.ts         # User state management
│   └── analyticsSlice.ts    # Analytics state management
```

## TypeScript Benefits
- Compile-time type checking
- Enhanced code reliability
- Strict type definitions

## Deployment
Hosted on Vercel

## Setup
```bash
npm install
npm start
```


