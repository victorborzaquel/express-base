"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const __1 = require("..");
const user_1 = require("../entities/user");
class UserRepository {
    constructor() {
        this.db = __1.db.getRepository(user_1.User);
    }
    async findAll() {
        return this.db.find();
    }
    async save(user) {
        return this.db.save(user);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.js.map