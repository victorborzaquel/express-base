"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUsersCase = void 0;
class FindAllUsersCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return this.userRepository.findAll();
    }
}
exports.FindAllUsersCase = FindAllUsersCase;
//# sourceMappingURL=case.js.map