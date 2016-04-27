import React, {Component} from 'react';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

class DataTable extends Component{
	renderHeader(headers){
		return(
			headers.map(function(obj,index){
				return (
					<TableHeaderColumn key={index} test={"boom"} >{obj}</TableHeaderColumn>
				)
			})
		)
	}

	renderRows(data,headers){
		return(
			data.map(function(row,index){
				return(
					<TableRow key={index}>
						{headers.map(function(element,index){
							return(
								<TableRowColumn key={index}>{row[element]}</TableRowColumn>
							)
						})}
					</TableRow>
				)
			})
		)
	}

	render(){
		return(
			<div className="container-fluid">
				Imagine a table~ ... Just Imagine it!~
				<Table>
					<TableHeader>
						<TableRow>
							{this.renderHeader(this.props.headers)}
						</TableRow>
					</TableHeader>
					<TableBody>
				      {this.renderRows(this.props.data,this.props.headers)}
				    </TableBody>
				</Table>				
			</div>
		)
	}
}

export default DataTable;