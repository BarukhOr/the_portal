import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, AUTH_ERROR } from './types';

import * as PATHS from '../../config.js';

export function signinUser({username,password}){
	return function(dispatch){
		//Submit email/password to the server
		axios.post(`${PATHS.BASE}${PATHS.SIGNIN}`,{username,password})
			.then(response => {
				//if request is good ...
					//Update State to indicate that user is authenticated
					dispatch({type:AUTH_USER});
					//Save JWT token
					localStorage.setItem('token',response.data.token);
					//Redirect to the route '/features'
					browserHistory.push('/feature');
			})
			.catch(() => {
					//if request is bad ...
					//Show an error to the user
					// console.log("error detected");
					dispatch(authError('Bad Login information'));
				})		
	}
}

export function authError(error){
	return{
		type:AUTH_ERROR,
		payload:error
	}
}