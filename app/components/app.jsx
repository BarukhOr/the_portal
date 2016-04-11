var React = require("react");
var createFragment = require("react-addons-create-fragment");
var Graphics = require("./Graphics.jsx")
var Programs = require("./Programs.jsx")
var Council = require("./Council.jsx")

module.exports = React.createClass({
	componentWillMount: function () {
		this.defineComponents(this.props.auth);
	},

	defineComponents: function (access) {
		var components = [];
		if(access.graphics) {
			components.push(createFragment({graphics: <Graphics access={access.graphics} />}));
		}

		if(access.programs) {
			components.push(createFragment({programs: <Programs access={access.programs} />}));
		}

		if(access.council) {
			components.push(createFragment({council: <Council access={access.council} />}));
		}

		this.setState({components: components});
	},

	render: function () {
		return(
			<div>
				<h4>APP</h4>
				{this.state.components}
			</div>
		)
	}
})