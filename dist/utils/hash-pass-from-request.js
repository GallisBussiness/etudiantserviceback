"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashFromRequest = void 0;
const bcrypt = require("bcryptjs");
async function hashFromRequest(o) {
    const { password } = o;
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return Object.assign(Object.assign({}, o), { password: hash });
}
exports.hashFromRequest = hashFromRequest;
//# sourceMappingURL=hash-pass-from-request.js.map