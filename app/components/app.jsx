var React = require("react");
var createFragment = require("react-addons-create-fragment");
var Colors = require("material-ui/lib/styles/colors");
var JobCard = require("./JobCard.jsx");

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
							title="Resident Advisor Programs"
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
				<div className="container">
					<div className="container-fluid">
						{this.state.components[0]}
					</div>
					<br />
					
					<div className="container-fluid col-sm-6">
						{this.state.components[1]}
					</div>

					<div className="container-fluid col-sm-6">
						{this.state.components[2]}
					</div>
					
				</div>
			</div>
		)
	}
})