import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => {
	return <div className='app'>
		Hello App
	</div>;
};

ReactDOM.render(<App />, document.querySelector('#app'));
