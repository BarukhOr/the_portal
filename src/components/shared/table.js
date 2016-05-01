import React, {Component} from 'react';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

class DataTable extends Component{

	renderHeader(headers){
		console.log(headers)
		return(
			<TableHeader>
				<TableRow>
					{Object.keys(headers).map(function(value,index){
						return(
							<TableHeaderColumn key={index}>{value}</TableHeaderColumn>
						)
					})}
				</TableRow>
			</TableHeader>
		)
	}

	renderBody(param_header,data){
		return(
			<TableBody>
				{data.map(function(element) {
					return(
						<TableRow>
							{Object.keys(param_header).map(function(value, index) {
								const local_header = param_header[value];
								return(
									<TableRowColumn key={element['_id']}>{element[local_header]}</TableRowColumn>
								)
							})}
						</TableRow>
					)
				})}
			</TableBody>
		)
	}

	render(){
		if(this.props.data){
			return(
				<div className="container-fluid">
					<Table>
						{this.renderHeader(this.props.header)}
						{this.renderBody(this.props.header,this.props.data)}
					</Table>
				</div>
			)
		}else{
			return(
				<div className="container-fluid">
					As an aside, the page is currently loading. As such<br/><br/>
					Imagine a table~ ... Just Imagine it!~<br/><br/>
				</div>
			)	
		}
	}
}

export default DataTable;