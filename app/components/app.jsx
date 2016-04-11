var React = require("react");
var createFragment = require("react-addons-create-fragment");
var Graphics = require("./Graphics.jsx")
var Programs = require("./Programs.jsx")
var Council = require("./Council.jsx")
var Colors = require("material-ui/lib/styles/colors");
var JobCard = require("./JobCard.jsx");
var mui = require("material-ui");
	AppBar = mui.AppBar;

console.log("Appbar", mui);

module.exports = React.createClass({
	componentWillMount: function () {
		this.defineComponents(this.props.auth);
	},

	defineComponents: function (access) {
		var components = [];

		if(access.programs) {
			components.push(
				createFragment(
					{programs: 
						<JobCard 
							title="Programs"
							subtitle="Create and manage RA Programs"
							color={Colors.deepPurple500}
							access={access.programs} 
						/>
					}
				)
			);
		}

		if(access.graphics) {
			components.push(
				createFragment(
					{graphics: 
						<JobCard 
							title="Graphics"
							subtitle="Create and manage Graphics Requests"
							color={Colors.teal500}
							access={access.programs} 
						/>
					}
				)
			);
		}

		if(access.council) {
			components.push(
				createFragment(
					{council: 
						<JobCard 
							title="Hall Council"
							subtitle="Create and manage Hall Council Programs"
							color={Colors.amber500}
							access={access.programs} 
						/>
					}
				)
			);
		}

		this.setState({components: components});
	},

	render: function () {
		return(
			<div>
				<AppBar title="Home" style={{background: Colors.blue500}} />
				<br />
				<div className="container">
					{this.state.components[0]}
					<br />
					
					<div className="container col-sm-6">
						{this.state.components[1]}
					</div>

					<div className="container col-sm-6">
						{this.state.components[2]}
					</div>
				</div>
			</div>
		)
	}
})