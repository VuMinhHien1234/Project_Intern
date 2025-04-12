import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../Redux_folder/store';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  birthdate: string;
  gender: string;
  isActive: boolean;
  roles: string[];
}

const initialState = {
  currentUser: {},
};
export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      console.log('before:', state.currentUser);
    },
    updateUserData: (state, action) => {
      if (state.currentUser) {
        // ...state.currentUser,
        // ...action.payload,
        state.currentUser.name = action.payload.name;
        state.currentUser.email = action.payload.email;
      }
      return state;
    },
  },
});
export const {setUser, updateUserData} = userDataSlice.actions;
export default userDataSlice.reducer;
