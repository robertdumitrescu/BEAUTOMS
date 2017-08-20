'use strict';

const GenericLogger = require('localpkg-generic-logger');
const GenericValidator = require('localpkg-generic-validator').genericValidator;
const GenericBoolValidatorHelper = require('localpkg-generic-validator').GenericBoolValidatorHelper;

const MeasurementsRepository = require(global.serverAppRoot + '/dataAccess/measurements/measurements.Repository.js');

/** Services */
const MeasurementsGetService = require(global.serverAppRoot + '/domain/measurements/measurements.Get.Service.js');

/**
 * @class ContentsCreateService
 * @constructor
 */
class MeasurementsCreateService {

    static getLightIntensity(lightElectricalQuantity){
        let lightElectricalQuantityUpperLimit = 400000;
        let lightIntensity = (lightElectricalQuantityUpperLimit / lightElectricalQuantity);

        return lightIntensity;
    }

    /**
     * @async
     * @param {Object} measurement
     * @returns {*}
     */
    static async create(measurement) {

        GenericLogger.serviceMethodTriggeredLog(MeasurementsCreateService.name + "." + MeasurementsCreateService.create.name);

        let createdMeasurementId = await MeasurementsRepository.insert({
            lightElectricalQuantity : measurement.lightElectricalQuantity,
            lightIntensity : MeasurementsCreateService.getLightIntensity(measurement.lightElectricalQuantity),
            createdDateTime: new Date(),
            modifiedDateTime: new Date()
        });

        let retrievedSavedMeasurement = await MeasurementsGetService.get(
            {id: createdMeasurementId},
            {},
            {limit: 1}
        );

        return retrievedSavedMeasurement;


    }


}

module.exports = MeasurementsCreateService;
