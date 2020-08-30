import React, { FC } from 'react';
import styles from './ErrorComponent.module.css';

interface ErrorComponentProps {
	errorMessage: string;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ errorMessage }) => (
	<div className={styles.wrapper}>{errorMessage}</div>
);

export default ErrorComponent;
