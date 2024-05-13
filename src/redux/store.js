import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const serializedState = localStorage.getItem('syfreduxState');
const preloadedState = serializedState ? JSON.parse(serializedState) : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloadedState
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('syfreduxState', JSON.stringify(state));
});

export default store;