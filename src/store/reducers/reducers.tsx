import { createReducer } from '@reduxjs/toolkit';
import { AddDataPayload } from '../actions/actions.types';

export interface DataState extends AddDataPayload {
	errorMessage: string | undefined;
}

const initialState: DataState = {
	data: [],
	page: 1,
	per_page: NaN,
	total: NaN,
	total_pages: NaN,
	errorMessage: undefined,
};

const apiDataReducer = createReducer(initialState, {
	'GET_DATA_FROM_API/pending': (state, action) =>
		(state.errorMessage = action.payload),
	'GET_DATA_FROM_API/fulfilled': (state, action) =>
		(state = {
			...action.payload,
			data: [...state.data, ...action.payload.data],
		}),
	'GET_DATA_FROM_API/rejected': (state, action) =>
		(state = {
			...state,
			errorMessage: 'Error Happened :( ',
		}),
	ADD_PAGE: (state) => {
		state.page++;
	},
});

export default apiDataReducer;
