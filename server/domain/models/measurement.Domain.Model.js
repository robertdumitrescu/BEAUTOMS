const GenericObjectHelper = require('localpkg-generic-helper').genericObjectHelper;
const GenericDateHelper = require('localpkg-generic-helper').GenericDateHelper;
const GenericNumberHelper = require('localpkg-generic-helper').GenericNumberHelper;

class MeasurementDomainModel {
    constructor() {
        this.id = null;
        this.lightElectricalQuantity = null;
        this.lightIntensity = null;
        this.createdDateTime = null;
        this.modifiedDateTime = null;
    }

    static toEntityModel(measurementDomainModel) {
        let measurementEntityModel = new MeasurementDomainModel();
        measurementEntityModel.id = measurementDomainModel.id;
        measurementEntityModel.lightElectricalQuantity = measurementDomainModel.lightElectricalQuantity;
        measurementEntityModel.lightIntensity = measurementDomainModel.lightIntensity;
        measurementEntityModel.createdDateTime = measurementDomainModel.createdDateTime;
        measurementEntityModel.modifiedDateTime = measurementDomainModel.modifiedDateTime;
        measurementEntityModel = GenericObjectHelper.sanitizeUndefinedProperties(measurementEntityModel);
        return measurementEntityModel;
    }

    static fromEntityModel(measurementEntityModel) {
        let measurementDomainModel = new MeasurementDomainModel();
        measurementDomainModel.id = GenericNumberHelper.castToNumberIfNumeric(measurementEntityModel.id);
        measurementDomainModel.lightElectricalQuantity = GenericNumberHelper.castToNumberIfNumeric(measurementEntityModel.lightElectricalQuantity);
        measurementDomainModel.lightIntensity = GenericNumberHelper.castToNumberIfNumeric(measurementEntityModel.lightIntensity);
        measurementDomainModel.createdDateTime = GenericDateHelper.fromSqlDate(measurementEntityModel.createdDateTime);
        measurementDomainModel.modifiedDateTime = GenericDateHelper.fromSqlDate(measurementEntityModel.modifiedDateTime);
        measurementDomainModel = GenericObjectHelper.sanitizeUndefinedProperties(measurementDomainModel);
        return measurementDomainModel;
    }

    static fromEntityModels(measurementEntityModels) {

        let measurementDomainModels = [];

        /** mgami - stands for measurementGetApiModels Iterator*/
        for (let mgami = 0; mgami < measurementEntityModels.length; mgami++) {
            measurementDomainModels.push(MeasurementDomainModel.fromEntityModel(measurementEntityModels[mgami]));
        }

        return measurementDomainModels;
    }
}

module.exports = MeasurementDomainModel;