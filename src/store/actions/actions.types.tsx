import { User } from '../../models/ApiResponse.model';

export interface AddDataPayload {
	data: User[];
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
}
