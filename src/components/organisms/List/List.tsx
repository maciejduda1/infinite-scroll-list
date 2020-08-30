import React, {
	useState,
	MutableRefObject,
	useRef,
	useCallback,
	useEffect,
	FC,
} from 'react';
import { addPage } from '../../../store/actions/actions';
import getApiData from '../../../store/thunks/thunks';
import { connect } from 'react-redux';
import { User } from '../../../models/ApiResponse.model';
import { DataState } from '../../../store/reducers/reducers';
import ListItem from '../../atoms/ListItem/ListItem';

import styles from './List.module.css';
import SpinnerLoader from '../../molecules/SpinnerLoader/SpinnerLoader';
import ErrorComponent from '../../atoms/ErrorComponent/ErrorComponent';

interface ListProps {
	dispatch: any;
	page: number;
	data: User[];
	totalPages: number;
	errorMessage: string | undefined;
}

const List: FC<ListProps> = ({
	dispatch,
	totalPages,
	data,
	page,
	errorMessage,
}) => {
	const [isLoading, setIsLoading] = useState<boolean>();

	const lastElementObserver: MutableRefObject<
		IntersectionObserver | undefined
	> = useRef();

	const lastElement = useCallback(
		(node) => {
			if (isLoading) return;
			if (lastElementObserver.current) {
				lastElementObserver.current.disconnect();
			}
			lastElementObserver.current = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting && totalPages > page) {
						dispatch(addPage());
					}
				}
			);

			if (node && lastElementObserver.current) {
				lastElementObserver.current.observe(node);
			}
		},
		[dispatch, isLoading, page, totalPages]
	);

	useEffect(() => {
		setIsLoading(true);
		dispatch(getApiData(page))
			.then(() => setIsLoading(false))
			.catch(() => setIsLoading(false));
	}, [dispatch, page]);

	return (
		<>
			{!!errorMessage && <ErrorComponent errorMessage={errorMessage} />}
			<ul className={styles.list}>
				{data.map(({ first_name, last_name, id }, index) =>
					data.length === index + 1 ? (
						<ListItem
							text={`${first_name} ${last_name}`}
							key={id}
							ref={lastElement}
						/>
					) : (
						<ListItem
							text={`${first_name} ${last_name}`}
							key={id}
						/>
					)
				)}
				{isLoading && <SpinnerLoader />}
			</ul>
		</>
	);
};

const mapStateToProps = (state: DataState) => {
	return {
		page: state.page,
		data: state.data,
		totalPages: state.total_pages,
		errorMessage: state.errorMessage,
	};
};
export default connect(mapStateToProps)(List);
