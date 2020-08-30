import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const ScrollArrow: FC = () => (
	<div className='scroll-indicator-wrapper'>
		<p>Scroll Down</p>
		<FontAwesomeIcon icon={faArrowCircleDown} />
	</div>
);

export default ScrollArrow;
