const logger = {
    "loggingOn" : true,
    "generic" : {
        "genericLoggingOn" : false,
        "endpointLoggingOn" : true,
        "granularLoggingOn" : true,
        "databaseStatementLoggingOn" : true
    },
    "components" : {
        "componentsLoggingOn" : false,
        "controllerMethodTriggeredLogginOn" : true,
        "serviceMethodTriggeredLogginOn" : true,
        "modelMethodTriggeredLogginOn" : true,
        "entityMapperMethodTriggeredLogginOn" : true,
        "entityModelMapperMethodTriggeredLogginOn" : true,
        "viewModelMapperMethodTriggeredLogginOn" : true,
        "repositoryMethodTriggeredLogginOn" : true,
        "validatorMethodTriggeredLogginOn" : true,
        "helperMethodTriggeredLogginOn" : true
    },
    "promises" : {
        "promisesLoggingOn" : false,
        "errorPromiseObjectLoggingOn" : true,
        "resolvePromiseObjectLoggingOn" : true
    },
    "flow" : {
        "flowLoggingOn" : false,
        "responseObjectLoggingOn" : true
    }
};

module.exports = logger;