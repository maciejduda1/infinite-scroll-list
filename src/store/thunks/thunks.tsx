import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ADDRESS } from '../../config/listDataApi';

const getApiData = createAsyncThunk(
	'GET_DATA_FROM_API',
	async (page: number) => {
		const response = await axios.get(`${API_ADDRESS}users`, {
			params: { page: page, per_page: 4 },
		});
		const data = response.data;
		delete data['ad'];
		return data;
	}
);

export default getApiData;
