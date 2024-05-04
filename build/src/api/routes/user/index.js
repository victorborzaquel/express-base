"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const create_user_1 = require("./create-user");
const find_all_users_1 = require("./find-all-users");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get('/', find_all_users_1.findAllUsers);
userRouter.post('/', create_user_1.createUser);
//# sourceMappingURL=index.js.map