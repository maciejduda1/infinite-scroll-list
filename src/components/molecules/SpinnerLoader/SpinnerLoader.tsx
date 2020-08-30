import React from 'react';
import LoadingSpinner from '../../atoms/LoadingSpinner/LoadingSpinner';
import styles from './SpinnerLoader.module.css';

const SpinnerLoader = () => (
	<div className={styles.wrapper}>
		<div className={styles['spinner-text']}>Loading more results...</div>
		<LoadingSpinner />
	</div>
);

export default SpinnerLoader;
