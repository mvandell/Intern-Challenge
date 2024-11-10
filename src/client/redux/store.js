import { configureStore } from '@reduxjs/toolkit';
import api from './api';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

setupListeners(store.dispatch)

export default store;