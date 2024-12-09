import React, { useState } from 'react';
import { User } from '../types';

// Mock user data
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', region: 'North' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', region: 'South' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', region: 'East' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'active', region: 'West' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', status: 'inactive', region: 'North' },
  { id: 6, name: 'John Doe', email: 'john@example.com', status: 'active', region: 'North' },
  { id: 7, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', region: 'South' },
  { id: 8, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', region: 'East' },
  { id: 9, name: 'Alice Williams', email: 'alice@example.com', status: 'active', region: 'West' },
  { id: 10, name: 'Charlie Brown', email: 'charlie@example.com', status: 'inactive', region: 'North' }
];

const UserManagementDashboard = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const usersPerPage = 5;

  // Filter users by search term
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Delete user handler
  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Pagination handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 w-full">

      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search by name or email" 
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-sm sm:text-base">ID</th>
              <th className="border p-2 text-sm sm:text-base">Name</th>
              <th className="border p-2 text-sm sm:text-base">Email</th>
              <th className="border p-2 text-sm sm:text-base">Status</th>
              <th className="border p-2 text-sm sm:text-base">Region</th>
              <th className="border p-2 text-sm sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id} className="text-sm sm:text-base">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  <span className={`px-2 py-1 rounded ${user.status === 'active' ? 'bg-green-200' : 'bg-red-200'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="border p-2">{user.region}</td>
                <td className="border p-2">
                  <button 
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
          <button 
            key={i} 
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserManagementDashboard;
