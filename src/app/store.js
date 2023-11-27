import { configureStore } from '@reduxjs/toolkit';
import statusSearchBoxReducer from '../reducers/setStatusSearchBox';

export default configureStore({
  reducer: {
    statusSearchBox:statusSearchBoxReducer,
  },
})