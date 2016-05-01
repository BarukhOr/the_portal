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

	renderBody(header,data){
		return(
			<TableBody>
				{data.map(function(element) {
					return(
						<TableRow>
							{Object.keys(header).map(function(value, index) {
								const testheader = header[value];
								console.log("testheader: ", testheader,'contents: ',element[testheader]);
								return(
									<TableRowColumn key={index}>{element[testheader]}</TableRowColumn>
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
			// const data=this.props.data;
			// const header=this.props.header;

			// data.map(function(element) {
			// 	Object.keys(header).map(function(value, index) {
			// 		const testheader = header[value];
			// 		console.log("testheader: ", testheader,'contents: ',element[testheader])
			// 	});
			// });

			return(
				<div className="container-fluid">
					IT WORKS!!!
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