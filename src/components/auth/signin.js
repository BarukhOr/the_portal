import React,{Component} from 'react'

import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import Snackbar from 'material-ui/lib/snackbar';
import TextField from 'material-ui/lib/text-field';

import { reduxForm } from 'redux-form';

import * as actions from '../../actions/';

class Signin extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
		snackbar_open: false
	  }
	}

	handleTouchTap(){
		this.setState({
			snackbar_open: true
		})
	}

	openAlert(){
			this.setState({
				snackbar_open: true
			})
		}

	handleRequestClose(){
	  this.setState({
		snackbar_open: false,
	  })
	}

	handleFormSubmit({username,password}){
		// console.log(username,password)
		//Do something to log user in
		this.props.signinUser({username,password})
	}

	renderAlert(){
		if(this.props.errorMessage){
			// this.setState({
			// 	errorMessage:this.props.errorMessage
			// }) 
		}
	}

	render(){
		const {handleSubmit,fields:{username,password}} = this.props;

		return(
			<form className="login-div" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Paper zDepth={1}>
					<fieldset className="form-group">
						<TextField
							hintText="Enter your username"
							value = "newtonk1"
							required
							{...username}
						/><br/>
						<TextField
							hintText="Enter your password"
							value="12345!"
							type="password"
							required
							{...password}
						/><br/>
						<FlatButton label="Sign In" type="submit" secondary={true} />
					</fieldset>

					<RaisedButton
						onTouchTap={this.handleTouchTap.bind(this)}
						label="Test Snackbar"
					/>

					{this.renderAlert()}

					<Snackbar
						open={this.state.snackbar_open}
						message="Incorrect Email or Password"
						autoHideDuration={4000}
						onRequestClose={this.handleRequestClose.bind(this)}
					/>
				</Paper>
			</form>
		)
	}
}

function mapStateToProps(state){
	return {errorMessage: state.auth.errorMessage};
}

export default reduxForm({
	form:'signin',
	fields:['username','password']
}, mapStateToProps, actions)(Signin);