var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _prettyFormat=_interopRequireWildcard(require("pretty-format"));var format=function format(input){return(0,_prettyFormat.default)(input,{plugins:[_prettyFormat.plugins.ReactTestComponent,_prettyFormat.plugins.ReactElement],highlight:true});};var _default=format;exports.default=_default;