"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFindAllUsers = void 0;
const user_1 = require("../../database/repositories/user");
const case_1 = require("./case");
function makeFindAllUsers() {
    const repository = new user_1.UserRepository();
    return new case_1.FindAllUsersCase(repository);
}
exports.makeFindAllUsers = makeFindAllUsers;
//# sourceMappingURL=make.js.map