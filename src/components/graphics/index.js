import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllGraphics } from '../../actions/';
import Table from '../shared/table';

class Graphics extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	headers:['Title','Name','Type','Priority','Status'],
		data:[{Title: 'Delete Program', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Found a bug', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Page acting weird', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Can\'t see requests', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'I dunno', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Delete Program', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Found a bug', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Page acting weird', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Can\'t see requests', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'I dunno', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Delete Program', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Found a bug', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Page acting weird', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'Can\'t see requests', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'},
			{Title: 'I dunno', Name : 'Craig Bodden', Type : 'Other', Priority: 'High', Status : 'submitted'}]
	  }
	}

	render(){
		return(
			<div>
				hello
				{this.props.getAllGraphics()}
				<Table headers={this.state.headers} data={this.state.data}/>
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