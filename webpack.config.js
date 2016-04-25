const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

var PATHS = {
	entry: path.join(__dirname, 'src/entry.js'),
	output: path.join(__dirname, 'build/bundle.js'),
	build_dir: path.join(__dirname, 'build')
};

console.log("Build Path:",PATHS.build_dir);

module.exports = {
	entry:PATHS.entry,
	output:{
		path: PATHS.build_dir,
		filename:"bundle.js"
	},
	// devtool:'source_map',
	devtool:'cheap-module-source-map',
	module:{
		loaders:[
					{
						test: /\.js?$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader', // 'babel-loader' is also a legal name to reference 
						query: {
						  presets: ['react', 'es2015', 'stage-0', 'stage-2'].map(function(name) { return require.resolve("babel-preset-"+name) }),
						}
					},
					{
						test: /\.styl$/,
						exclude: /(node_modules)/,
						loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
					},
					{
						test: /\.(jpg|png)$/,
						loader: 'url?limit=25000',
						include: PATHS.images
					}
				]
	},
	devServer:{
		historyApiFallback:true
	},
	plugins:[
		new WebpackNotifierPlugin()
	],
	resolve:{
		root:path.resolve('.src/'),
		extensions:['','.js']
	},
	historyApiFallback: true
}