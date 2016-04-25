import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import reducers from './reducers';

import MainLayout from './components/main_layout';
import Signin from './components/auth/signin';
import Home from './components/home';
import Graphics from './components/graphics/graphics';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    	<Route path="/" component={MainLayout}>
    		<Route path="signin" component={Signin} />
    		<Route path="graphics" component={Graphics} />
    	</Route>
    </Router>
  </Provider>,document.getElementById('root')
)