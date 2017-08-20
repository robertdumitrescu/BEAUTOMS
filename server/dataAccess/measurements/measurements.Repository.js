"use strict";
const GenericLogger = require('localpkg-generic-logger');

/** localpkg query builders*/
const SqlSelectQueryBuilder = require('localpkg-sql-query-builder').SqlSelectQueryBuilder;
const SqlInsertQueryBuilder = require('localpkg-sql-query-builder').SqlInsertQueryBuilder;
const SqlQueryExecuter = require('localpkg-sql-query-builder').SqlQueryExecuter;


const tableName = "measurements";


/**
 * @class MeasurementsRepository
 */
class MeasurementsRepository {


    static async select (query) {
        GenericLogger.repositoryMethodTriggeredLog(MeasurementsRepository.name + "." + MeasurementsRepository.select.name);

        let sqlQueryObject = {
            "metaData": {
                "databaseName": global.config.database.credentials.db,
                "tableName": tableName
            },
            "targetObject": GenericHelper.sanitizeNullProperties(query),
        };

        let selectStatement = await SqlSelectQueryBuilder.buildSqlSelectQuery(sqlQueryObject);

        console.log(selectStatement);

        let response = await SqlQueryExecuter.executeSqlQuery(selectStatement, global.databaseConnection);

        return response;
    }


    /**
     * Method that inserts an content and returns the content id if successful.
     * @param {Object} content | The content object
     * @static
     * @returns {number} id
     */
    static async insert (content) {

        GenericLogger.repositoryMethodTriggeredLog(MeasurementsRepository.name + "." + MeasurementsRepository.insert.name);


        let sqlQueryObject = {
            "metaData": {
                "databaseName": global.config.database.credentials.db,
                "tableName": tableName
            },
            "entityObject": content,
        };

        let insertStatement = await SqlInsertQueryBuilder.buildSqlInsertQuery(sqlQueryObject);

        let response = await SqlQueryExecuter.executeSqlQuery(insertStatement, global.databaseConnection);

        content.id = response.info.insertId;
        return content.id;

    }


}

module.exports = MeasurementsRepository;