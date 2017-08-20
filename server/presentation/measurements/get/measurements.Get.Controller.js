"use strict";

let express = require('express');
let router = express.Router();

/** localpkg packages */
const GenericLogger = require('localpkg-generic-logger');

/** Models */
const GenericRequirementsDomainModel = require("localpkg-generic-requirements-service").GenericRequirementsDomainModel;

/** Services */
const MeasurementsGetService = require(global.serverAppRoot + '/domain/measurements/measurements.Get.Service.js');

/**
 * @class CategoriesCreateController
 * @constructor
 */
class MeasurementsGetController {

    static async process(request) {
        GenericLogger.serviceMethodTriggeredLog(MeasurementsGetController.name + "." + MeasurementsGetController.process.name);

        let requirements = {};
        let genericRequirements = GenericRequirementsDomainModel.fromViewModel(request.query);

        let measurements = await MeasurementsGetService.get(request.query, requirements, genericRequirements);

        let successResponseDomainModel = {
            status: 200,
            data: measurements
        };

        return successResponseDomainModel;


    }
}

router.get('/api/measurements', function (request, response) {
    GenericLogger.endpointTriggeredLog('/api/measurements');

    MeasurementsGetController.process(request)
        .then(function (successResponseGenericModel) {
            response.status(successResponseGenericModel.status).send(successResponseGenericModel);
        })
        .catch(function (errorResponseGenericModel) {
            console.log(errorResponseGenericModel);
            response.status(errorResponseGenericModel.status).send(errorResponseGenericModel);
        });

});

module.exports = router;