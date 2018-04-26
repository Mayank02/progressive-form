import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CodeChallenge from './containers/code-challenge';

export default (
	<Switch>
		<Route exact path="/" component={CodeChallenge} />
	</Switch>
);
