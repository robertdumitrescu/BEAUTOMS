"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const GenericTerminalHelper = require('localpkg-generic-helper').genericTerminalHelper;
const DatabaseConnectionBuilder = require('localpkg-sql-query-builder').DatabaseConnectionBuilder;

/** get the environmentName from console*/
if(typeof global.environmentName === "undefined") {
    global.environmentName = GenericTerminalHelper.getTerminalArgumentValue("env");
}

if(typeof global.environmentName === "undefined" || global.environmentName === "") {
    global.environmentName = "prod";
}

/** Project configs */
global.config = require('./configs/' + global.environmentName + '/config.js');

global.serverAppRoot = path.resolve(__dirname) + "/server";

global.databaseConnection = DatabaseConnectionBuilder.build(global.config.database.credentials);

let app = express();

app.use(morgan('dev'));


/**
 * This to get body params from old school POST request (those from forms with method and action tags)
 */

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

/** Controllers */
let MeasurementsCreateController = require(global.serverAppRoot + '/presentation/measurements/create/measurements.Create.Controller.js');
let MeasurementsGetController = require(global.serverAppRoot + '/presentation/measurements/get/measurements.Get.Controller.js');

app.use('/', MeasurementsCreateController);
app.use('/', MeasurementsGetController);

let server = app.listen(5555, function () {

    let host = server.address().address;
    let port = server.address().port;

    console.log('======> Starting');
    console.log('Started at : ' + new Date().toUTCString());
    console.log('======> Started successfully');
});

module.exports = app;