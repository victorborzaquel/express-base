"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const zod_1 = require("zod");
const make_1 = require("../../../cases/create-user/make");
const user_1 = require("../../presenters/user");
async function createUser(req, res) {
    const body = zod_1.z.object({ name: zod_1.z.string() }).parse(req.body);
    const response = await (0, make_1.makeCreateUser)().execute(body);
    res.send((0, user_1.userToJson)(response));
}
exports.createUser = createUser;
//# sourceMappingURL=create-user.js.map