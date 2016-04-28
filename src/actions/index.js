import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, AUTH_ERROR, GRAPHICS_PRINT_ALL } from './types';

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
					//Redirect to the route '/dash'
					browserHistory.push('/dash');
			})
			.catch(() => {
					//if request is bad ...
					//Show an error to the user
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

export function getAllGraphics(){
	const url = `${PATHS.API}${PATHS.GRAPHICS_PRINT_ALL}`;
	const request = axios.get(url);

	return(dispatch) => {
		request.then(({data})=>{
			dispatch({type:GRAPHICS_PRINT_ALL,payload:data})
		})
	}
}