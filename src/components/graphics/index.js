import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllGraphics } from '../../actions/';
import Table from '../shared/table';

class Graphics extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	headers:{title:'Event_Title',name:'name',dimensions:'dimensions',status:'status',assigned_to:'assigned_to'},
	  }

	}

	componentWillMount(){
		this.props.getAllGraphics();
	}

	render(){

		return(
			<div>
				<Table header={this.state.headers} data={this.props.graphics.graphics_print_all}/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getAllGraphics},dispatch);
}

function mapStateToProps({graphics}){
	return{graphics}
}

export default connect(mapStateToProps,mapDispatchToProps)(Graphics);
