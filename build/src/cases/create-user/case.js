"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCase = void 0;
const user_1 = require("../../database/entities/user");
class CreateUserCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ name }) {
        const user = new user_1.User({ name });
        return this.userRepository.save(user);
    }
}
exports.CreateUserCase = CreateUserCase;
//# sourceMappingURL=case.js.map