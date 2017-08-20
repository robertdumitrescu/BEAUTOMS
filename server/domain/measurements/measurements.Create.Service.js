'use strict';

const GenericLogger = require('localpkg-generic-logger');
const GenericValidator = require('localpkg-generic-validator').genericValidator;
const GenericBoolValidatorHelper = require('localpkg-generic-validator').GenericBoolValidatorHelper;

const MeasurementsRepository = require(global.serverAppRoot + '/dataAccess/measurements/measurements.Repository.js');

/**
 * @class ContentsCreateService
 * @constructor
 */
class MeasurementsCreateService {

    /**
     * @async
     * @param {Object} measurement
     * @returns {*}
     */
    static async create(measurement) {

        GenericLogger.serviceMethodTriggeredLog(MeasurementsCreateService.name + "." + MeasurementsCreateService.create.name);

        await MeasurementsRepository.insert({
            lightElectricalQuantity : measurement.lightElectricalQuantity,
            createdDateTime: new Date(),
            modifiedDateTime: new Date()
        })


    }


}

module.exports = MeasurementsCreateService;
