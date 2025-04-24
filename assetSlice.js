import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const assetSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setAssets: (state, action) => {
      state.data = action.payload;
    },
    updateAsset: (state, action) => {
      const index = state.data.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      }
    },
  },
});

export const { setAssets, updateAsset } = assetSlice.actions;
export default assetSlice.reducer;