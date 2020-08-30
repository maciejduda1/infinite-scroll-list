import React, { FC } from 'react';
import './App.css';
import Title from './components/atoms/Title/Title';
import ScrollArrow from './components/atoms/ScrollArrow/ScrollArrow';
import List from './components/organisms/List/List';

const App: FC = () => {
	return (
		<div className='App'>
			<main className='App-main'>
				<Title title='Infinite scroll example made by Maciej Duda' />
				<ScrollArrow />
				<List />
			</main>
		</div>
	);
};

export default App;
