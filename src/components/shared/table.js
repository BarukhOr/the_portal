import React, {Component} from 'react';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

class DataTable extends Component{


	testSpace(data){

		for(var eom in data){
			var prata = JSON.stringify(data[eom])
			console.log("prata",prata.name)
			var rato = data[eom]
			console.log("testing",rato.name)
		}
	}

	render(){
		return(
			<div className="container-fluid">
				Imagine a table~ ... Just Imagine it!~
				<Table>
					<TableBody>
					  {this.testSpace(this.props.data,{name:'name'})}
					</TableBody>
				</Table>
			</div>
		)
	}
}

export default DataTable;