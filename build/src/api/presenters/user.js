"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToJson = exports.UserJson = void 0;
class UserJson {
}
exports.UserJson = UserJson;
function userToJson(user) {
    return {
        id: user.id,
        name: user.name,
    };
}
exports.userToJson = userToJson;
//# sourceMappingURL=user.js.map