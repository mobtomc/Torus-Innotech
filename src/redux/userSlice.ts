import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserState } from '../types';
import axios from 'axios';

// Mock API call for users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ page = 1, limit = 5 }: { page?: number; limit?: number }) => {
    const response = await axios.get('/api/users', { 
      params: { page, limit } 
    });
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: number) => {
    await axios.delete(`/api/users/${userId}`);
    return userId;
  }
);

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalUsers: 0
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.totalUsers = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
        state.totalUsers -= 1;
      });
  }
});

export const { setPage } = userSlice.actions;
export default userSlice.reducer;

