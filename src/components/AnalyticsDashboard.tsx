import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, 
  BarChart, Bar, PieChart, Pie, Cell, 
  ResponsiveContainer 
} from 'recharts';

const initialMetrics = {
  totalUsers: 1250,
  activeUsers: 875,
  deletedUsers: 45
};

const registrationTrendData = [
  { month: 'Jan', userCount: 200 },
  { month: 'Feb', userCount: 300 },
  { month: 'Mar', userCount: 250 },
  { month: 'Apr', userCount: 400 },
  { month: 'May', userCount: 350 },
  { month: 'Jun', userCount: 450 }
];

const userRegionDistribution = [
  { region: 'North', userCount: 350 },
  { region: 'South', userCount: 275 },
  { region: 'East', userCount: 225 },
  { region: 'West', userCount: 400 }
];

const activeInactiveData = [
  { name: 'Active', value: 875 },
  { name: 'Inactive', value: 375 }
];

const COLORS = ['#00C49F', '#FF8042'];

const AnalyticsDashboard = () => {
  const [metrics] = useState(initialMetrics);
  const [registrationTrend] = useState(registrationTrendData);
  const [regionData] = useState(userRegionDistribution);
  const [activeInactive] = useState(activeInactiveData);

  return (
    <div className="p-4 space-y-6 w-full">
      <div className="grid grid-cols-3 gap-4">
        <OverviewCard 
          title="Total Users" 
          value={metrics.totalUsers} 
        />
        <OverviewCard 
          title="Active Users" 
          value={metrics.activeUsers} 
        />
        <OverviewCard 
          title="Deleted Users" 
          value={metrics.deletedUsers} 
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            User Registration Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={registrationTrend}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="userCount" 
                stroke="#8884d8" 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Users by Region
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionData}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="userCount" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Active vs Inactive Users
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={activeInactive}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {activeInactive.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const OverviewCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 text-center">
    <h4 className="text-gray-500">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default AnalyticsDashboard;