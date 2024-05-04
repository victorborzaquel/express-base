"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const bodyParser = require("body-parser");
const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
const user_1 = require("./api/routes/user");
const error_handler_1 = require("./config/error-handler");
const http = express();
exports.http = http;
http.use(cors());
http.use(bodyParser.json());
http.use(bodyParser.urlencoded({ extended: false }));
http.use(methodOverride());
http.use('/users', user_1.userRouter);
http.use(error_handler_1.errorHandler);
//# sourceMappingURL=http.js.map