// src/redux/analyticsSlice.ts
export interface AnalyticsState {
    metrics: {
      totalUsers: number;
      activeUsers: number;
      deletedUsers: number;
    };
    registrationTrend: Array<{
      month: string;
      userCount: number;
    }>;
    userRegionDistribution: Array<{
      region: string;
      userCount: number;
    }>;
  }
  
  const initialState: AnalyticsState = {
    metrics: {
      totalUsers: 1250,
      activeUsers: 875,
      deletedUsers: 45
    },
    registrationTrend: [
      { month: 'Jan', userCount: 200 },
      { month: 'Feb', userCount: 300 },
      { month: 'Mar', userCount: 250 },
      { month: 'Apr', userCount: 400 },
      { month: 'May', userCount: 350 },
      { month: 'Jun', userCount: 450 }
    ],
    userRegionDistribution: [
      { region: 'North', userCount: 350 },
      { region: 'South', userCount: 275 },
      { region: 'East', userCount: 225 },
      { region: 'West', userCount: 400 }
    ]
  };
  
  export default initialState;