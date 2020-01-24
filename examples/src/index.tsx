import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Button from './pages/Button';
import Form from './pages/Form';
import './index.scss';

const IRouter = () => {
	return <HashRouter>
		<App>
			<Switch>
				<Route path='/' render={({ match }) => {
					return <Switch>
						<Route path={`${match.path}button`} component={Button} />
						<Route path={`${match.path}form`} component={Form} />
					</Switch>;
				}} />
			</Switch>
		</App>
	</HashRouter>;
};

ReactDOM.render(<IRouter />, document.querySelector('#app'));
