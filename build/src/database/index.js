"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const typeorm_1 = require("typeorm");
exports.db = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [`${__dirname}/entities/*.{js,ts}`],
    synchronize: true,
    logging: true,
});
//# sourceMappingURL=index.js.map