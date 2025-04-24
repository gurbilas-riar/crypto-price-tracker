import { configureStore } from '@reduxjs/toolkit';
import assetReducer from './features/assets/assetSlice';

export default configureStore({
  reducer: {
    assets: assetReducer,
  },
});