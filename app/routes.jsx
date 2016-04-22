var MainLayout = require("./components/MainLayout.jsx")
var App = require("./components/App.jsx")
var JobCard = require("./components/JobCard.jsx")
var JobDash = require("./components/JobDash.jsx")
var JobContent = require("./components/JobContent.jsx")
var ReactForm = require("./components/ReactForm.jsx")
var router = require('react-router'),
	Route = router.Route,
	IndexRoute = router.IndexRoute,
	browserHistory = router.browserHistory;

module.exports= (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={App} />
		<Route component={JobDash}>
			<Route path="Graphics">
				<IndexRoute component={JobContent} />
				<Route path="New" component={ReactForm} />
			</Route>

			<Route path="Programs">
				<IndexRoute component={JobContent} />
				<Route path="New" component={ReactForm} />
			</Route>

			<Route path="Council">
				<IndexRoute component={JobContent} />
				<Route path="New" component={ReactForm} />
			</Route>
		</Route>
	</Route>
)

	app.get('/*', function (reg, res) {
		router.run(routes, req.url, (Handler) => {
			res.send('<!DOCTYPE html>' + React.renderToString(Handler));
		})
	})