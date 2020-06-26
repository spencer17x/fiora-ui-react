import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, HashRouterProps, Redirect, Route, Switch } from 'react-router-dom';
import { menuConfig } from './config';
import './index.scss';

const IRouter: React.FC<HashRouterProps> = () => {
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
										{
											menuConfig.map(menu => {
												return <Route
													key={menu.component}
													component={
														React.lazy(() => import(`./pages/${menu.component}`))
													}
													path={`${match.path}/${menu.component}`}
												/>;
											})
										}
									</Switch>
								);
							}}
						/>
						<Redirect to="/components/button" />
					</Switch>
				</Suspense>
			</App>
		</HashRouter>
	);
};

ReactDOM.render(<IRouter />, document.querySelector('#app'));
