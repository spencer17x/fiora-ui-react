import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../lib';
import './index.scss';

const App = () => {
	return <div className='app'>
		<Button/>
	</div>;
};

ReactDOM.render(<App />, document.querySelector('#app'));
