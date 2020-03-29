import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './index.scss';

const Button = React.lazy(() => import('./pages/Button'));
const Icon = React.lazy(() => import('./pages/Icon'));
const Layout = React.lazy(() => import('./pages/Layout'));
const Grid = React.lazy(() => import('./pages/Grid'));
const Affix = React.lazy(() => import('./pages/Affix'));
const Form = React.lazy(() => import('./pages/Form'));

const IRouter = () => {
	return (
		<HashRouter>
			<App>
				<Suspense fallback={<div>loading...</div>}>
					<Switch>
						<Route
							path="/components"
							render={({ match }) => {
								return (
									<Switch>
										<Route path={`${match.path}/button`} component={Button} />
										<Route path={`${match.path}/icon`} component={Icon} />
										<Route path={`${match.path}/layout`} component={Layout} />
										<Route path={`${match.path}/grid`} component={Grid} />
										<Route path={`${match.path}/affix`} component={Affix} />
										<Route path={`${match.path}/form`} component={Form} />
										<Redirect to={`${match.path}/button`} />
									</Switch>
								);
							}}
						/>
						<Redirect to="/components" />
					</Switch>
				</Suspense>
			</App>
		</HashRouter>
	);
};

ReactDOM.render(<IRouter />, document.querySelector('#app'));
