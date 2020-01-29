import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './index.scss';

const Button = React.lazy(() => import('./pages/Button'));
const Form = React.lazy(() => import('./pages/Icon'));

const IRouter = () => {
	return <HashRouter>
		<App>
			<Suspense fallback={<div>loading...</div>}>
				<Switch>
					<Route path='/components' render={({ match }) => {
						return <Switch>
							<Route path={`${match.path}/button`} component={Button} />
							<Route path={`${match.path}/form`} component={Form} />
							<Route path={`${match.path}/icon`} component={Form} />
							<Redirect to={`${match.path}/button`} />
						</Switch>;
					}} />
					<Redirect to='/components' />
				</Switch>
			</Suspense>
		</App>
	</HashRouter>;
};

ReactDOM.render(<IRouter />, document.querySelector('#app'));
