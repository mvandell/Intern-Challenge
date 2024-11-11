import { configureStore } from '@reduxjs/toolkit';
import api from './api';
import { setupListeners } from '@reduxjs/toolkit/query';
import defaultReducer from './defaultReducer';

const store = configureStore({
  reducer: defaultReducer, //FIXME: need a better reducer
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

setupListeners(store.dispatch)

export default store;