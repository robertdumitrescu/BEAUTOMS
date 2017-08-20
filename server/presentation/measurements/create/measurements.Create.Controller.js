"use strict";

let express = require('express');
let router = express.Router();

/** localpkg packages */
const GenericLogger = require('localpkg-generic-logger');

/** Services */
const MeasurementsCreateService = require(global.serverAppRoot + '/domain/measurements/measurements.Create.Service.js');

/**
 * @class CategoriesCreateController
 * @constructor
 */
class MeasurementsCreateController {

    static async process(request) {
        GenericLogger.serviceMethodTriggeredLog(MeasurementsCreateController.name + "." + MeasurementsCreateController.process.name);

        let measurement = request.body;

        await MeasurementsCreateService

        let successResponseDomainModel = {
            status: 200,
            data: "lalala"
        };

        return successResponseDomainModel;


    }
}

router.post('/api/measurements', function (request, response) {
    GenericLogger.endpointTriggeredLog('/api/measurements');

    MeasurementsCreateController.process(request)
        .then(function (successResponseGenericModel) {
            response.status(successResponseGenericModel.status).send(successResponseGenericModel);
        })
        .catch(function (errorResponseGenericModel) {
            console.log(errorResponseGenericModel);
            response.status(errorResponseGenericModel.status).send(errorResponseGenericModel);
        });

});

module.exports = router;