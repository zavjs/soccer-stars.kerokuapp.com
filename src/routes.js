import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from 'components/Home';
import AthletePage from 'components/Athlete/AthletePage';
import Layout from 'components/Layout';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="athlete/:id" component={AthletePage} />
	</Route>
);

export default routes;