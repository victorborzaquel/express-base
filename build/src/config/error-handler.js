"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map