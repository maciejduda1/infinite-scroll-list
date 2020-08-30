import React, { FC } from 'react';

interface TitleProps {
	title: string;
	color?: string;
	fontSize?: string;
}

const Title: FC<TitleProps> = ({ color, fontSize, title }) => (
	<div>{title}</div>
);

export default Title;
