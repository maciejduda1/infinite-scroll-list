import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './reducers/reducers';

const store = configureStore({
	reducer: apiDataReducer,
});

export default store;
