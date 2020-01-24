import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import './index.scss';

const App = () => {
	return <div className='app'>
		<Header/>
	</div>;
};

ReactDOM.render(<App />, document.querySelector('#app'));
