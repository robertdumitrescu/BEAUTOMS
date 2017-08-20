'use strict';

const GenericLogger = require('localpkg-generic-logger');
const GenericValidator = require('localpkg-generic-validator').genericValidator;
const GenericBoolValidatorHelper = require('localpkg-generic-validator').GenericBoolValidatorHelper;
const GenericRequirementsService = require("localpkg-generic-requirements-service").GenericRequirementsService;

/** Repositories */
const MeasurementsRepository = require(global.serverAppRoot + '/dataAccess/measurements/measurements.Repository.js');



/**
 * @class ContentsCreateService
 * @constructor
 */
class MeasurementsGetService {


    /**
     * @async
     * @param {Object} query
     * @param requirements
     * @param genericRequirements
     * @returns {*}
     */
    static async get(query, requirements, genericRequirements) {

        GenericLogger.serviceMethodTriggeredLog(MeasurementsGetService.name + "." + MeasurementsGetService.get.name);

        let measurements = await MeasurementsRepository.select(query);

        measurements = GenericRequirementsService.fulfillGenericRequirements(measurements, genericRequirements);

        return measurements;
    }


}

module.exports = MeasurementsGetService;
