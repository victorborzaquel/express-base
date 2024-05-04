"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateUser = void 0;
const user_1 = require("../../database/repositories/user");
const case_1 = require("./case");
function makeCreateUser() {
    const repository = new user_1.UserRepository();
    return new case_1.CreateUserCase(repository);
}
exports.makeCreateUser = makeCreateUser;
//# sourceMappingURL=make.js.map