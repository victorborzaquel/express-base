"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const database_1 = require("./database");
const http_1 = require("./http");
async function server() {
    await database_1.db.initialize();
    http_1.http.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
server();
//# sourceMappingURL=index.js.map