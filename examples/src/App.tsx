import React  from 'react';
import Header from './components/Header';

const App = ({
	children,
	...restProps
}) => {
	return <div className='container'>
		<Header />
		{children}
	</div>;
};

export default App;
