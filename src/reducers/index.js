import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import authReducer from './auth_reducer';
import graphicReducer from './auth_graphics';

const rootReducer = combineReducers({
	form: form,
	auth: authReducer,
	graphics: graphicReducer
})

export default rootReducer;