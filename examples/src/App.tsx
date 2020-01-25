import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import './App.scss';

interface Props {

}

const App: React.FC<Props> = ({
	children
}) => {
	return <div className='page-container'>
		<Header />
		<div className='page-container_content'>
			<SideBar className='page-container_sidebar' />
			<div className='page-container_main'>{children}</div>
		</div>
	</div>;
};

export default App;
