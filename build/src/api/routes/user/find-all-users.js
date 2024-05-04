"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUsers = void 0;
const make_1 = require("../../../cases/find-all-users/make");
const user_1 = require("../../presenters/user");
async function findAllUsers(req, res) {
    const response = await (0, make_1.makeFindAllUsers)().execute();
    res.send(response.map(user_1.userToJson));
}
exports.findAllUsers = findAllUsers;
//# sourceMappingURL=find-all-users.js.map