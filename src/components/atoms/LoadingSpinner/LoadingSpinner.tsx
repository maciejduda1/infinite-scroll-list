import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
	<div className={styles['lds-spinner']}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default LoadingSpinner;
