//====================================================|
// WEBPACK PROD PLUGINS: OCCURRENCE ORDER


//--------------------------| Import

const webpack = require('webpack');


//--------------------------| Configuration

const plugin = new webpack.optimize.OccurrenceOrderPlugin();


//--------------------------| Export

module.exports = plugin;