var React = require("react")
var ReactDOM = require("react-dom")
var LoginPage = require("./components/LoginPage.jsx")
var JobDash = require("./components/JobDash.jsx")
var JobCard = require("./components/JobCard.jsx")
var ReactForm = require("./components/ReactForm.jsx")
var Colors = require("material-ui/lib/styles/colors")
var App = require("./components/App.jsx")
var access = {graphics: 1, programs: 1, council: 1}
var mui = require("material-ui"),
	AppBar = mui.AppBar;
var router = require('react-router'),
	Router = router.Router,
	Route = router.Route,
	Link = router.Link,
	browserHistory = router.browserHistory;

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var MainLayout = React.createClass({
	getInitialState: function(){
		return {
			title: "Home",
			color: {background: Colors.blue500}
		}
	},

	componentDidMount: function (){
		var color;
		window.addEventListener("recolor", function(e){
			color = e.detail;
			console.log(color)
		})
		
		// this.setState({color: color});
	},

	componentWillUnmount: function () {
		window.removeEventListener("recolor");
	},

	render: function() {
		return (
			<div className="app">
				<AppBar title={this.state.title} style={this.state.color} />
				<br />
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
});


var AppAuth = React.createClass({
	render: function () {
		return <App auth={access} />
	}
})

var GraphicsForm = React.createClass({
	render: function () {
		return <ReactForm />
	}
})


function render(){
	ReactDOM.render((  
	<Router history={browserHistory}>
		<Route component={MainLayout}>
			<Route path="/" component={AppAuth} />
			<Route path="Graphics" component={JobDash} />
			<Route path="Graphics/New" component={GraphicsForm} />
			<Route path="Programs" component={JobDash} />
		</Route>
	</Router>), document.getElementById("container"));    
	// ReactDOM.render(<JobDash />, document.getElementById("container"));    
}
render();