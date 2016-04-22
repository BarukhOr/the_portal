var React = require("react");
var Colors = require("material-ui/lib/styles/colors");

module.exports = React.createClass({
	componentWillMount: function() {
		var appbarSettings = {
			Graphics: {background: Colors.teal500},
			Programs: {background: Colors.deepPurple500},
			Council: {background: Colors.amber500}
		}

		var location = this.props.location.pathname.split("/")[1]

		this.props.setAppbar(location, appbarSettings[location])
	},

	render: function () {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
})