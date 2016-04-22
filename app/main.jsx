var React = require("react")
var ReactDOM = require("react-dom")
var MainLayout = require("./components/MainLayout.jsx")
var JobDash = require("./components/JobDash.jsx")
var JobCard = require("./components/JobCard.jsx")
var JobContent = require("./components/JobContent.jsx")
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
	IndexRoute = router.IndexRoute,
	browserHistory = router.browserHistory;

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var AppAuth = React.createClass({
	render: function () {
		return <App setAppbar={this.props.setAppbar} auth={access} />
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
		<Route path="/" component={MainLayout}>
			<IndexRoute component={AppAuth} />
			<Route component={JobDash}>
				<Route path="Graphics">
					<IndexRoute component={JobContent} />
					<Route path="New" component={GraphicsForm} />
				</Route>

				<Route path="Programs">
					<IndexRoute component={JobContent} />
					<Route path="New" component={GraphicsForm} />
				</Route>

				<Route path="Council">
					<IndexRoute component={JobContent} />
					<Route path="New" component={GraphicsForm} />
				</Route>
			</Route>
		</Route>
	</Router>), document.getElementById("container"));    
}
render();