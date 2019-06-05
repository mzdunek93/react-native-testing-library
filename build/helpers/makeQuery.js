var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _errors=require("./errors");function isNodeValid(node){return typeof node.type==='string';}function makeAliases(aliases,query){return aliases.map(function(alias){return(0,_defineProperty2.default)({},alias,query);}).reduce(function(acc,query){return(0,_objectSpread2.default)({},acc,query);},{});}var makeQuery=function makeQuery(name,queryNames,matcherFn){return function(instance){var getBy=function getBy(matcher){try{return instance.find(function(node){return isNodeValid(node)&&matcherFn(node.props[name],matcher);});}catch(error){throw new _errors.ErrorWithStack((0,_errors.prepareErrorMessage)(error),getBy);}};var getAllBy=function getAllBy(matcher){var results=instance.findAll(function(node){return isNodeValid(node)&&matcherFn(node.props[name],matcher);});if(results.length===0){throw new _errors.ErrorWithStack('No instances found',getAllBy);}return results;};var queryBy=function queryBy(matcher){try{return getBy(matcher);}catch(error){return(0,_errors.createQueryByError)(error,queryBy);}};var queryAllBy=function queryAllBy(matcher){try{return getAllBy(matcher);}catch(error){return[];}};return(0,_objectSpread2.default)({},makeAliases(queryNames.getBy,getBy),makeAliases(queryNames.getAllBy,getAllBy),makeAliases(queryNames.queryBy,queryBy),makeAliases(queryNames.queryAllBy,queryAllBy));};};var _default=makeQuery;exports.default=_default;