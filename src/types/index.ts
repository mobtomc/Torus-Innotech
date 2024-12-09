export interface RegistrationTrendData {
    month: string;
    userCount: number;
  }
  
export interface UserRegionDistribution {
    region: string;
    userCount: number;
  }
export interface User {
    id: number;
    name: string;
    email: string;
    status: 'active' | 'inactive';
    region: string;
  }