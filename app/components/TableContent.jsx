var React = require("react");
var createFragment = require("react-addons-create-fragment");
var mui = require("material-ui"),
	Table = mui.Table,
	TableHeaderColumn = mui.TableHeaderColumn,
	TableRow = mui.TableRow,
	TableHeader = mui.TableHeader,
	TableRowColumn = mui.TableRowColumn,
	TableBody = mui.TableBody;

module.exports = React.createClass({
	renderHead: function () {
		var first = Object.keys(this.props.content)[0];
		var content = (first ? this.props.content[first] : ["No Data"]);

		return (
			<TableHeader>
				<TableRow>
					{Object.keys(content).map(function(object, i) {
						return <TableHeaderColumn key={i}> {object} </TableHeaderColumn>
					})}
				</TableRow>
			</TableHeader>
		)
	},

	renderRow: function (row) {
		var data = this.props.content[row];
		return (
			<TableRow>
				{Object.keys(data).map(function(key, i) {
					return <TableRowColumn key={i}> {data[key]} </TableRowColumn>
				})}
			</TableRow>
		)
	},

	render: function() {
		var details = this.props.details;
		return (
			<div className="container-fluid">
				<Table>
					{this.renderHead()}
					<TableBody>
						{Object.keys(this.props.content).map(this.renderRow)}
					</TableBody>
				</Table>
			</div>
		)
	}
});