"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const express_1 = require("express");
const helmet_1 = require("helmet");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const http_exection_filter_1 = require("./http-exection-filter");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        prefix: '/uploads/',
    });
    app.use((0, helmet_1.default)());
    app.use((0, express_1.json)({ limit: '10mb' }));
    app.enableCors({
        origin: '*',
        allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe,Authorization',
        methods: 'GET,PUT,POST,DELETE,PATCH,UPDATE,OPTIONS',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        disableErrorMessages: process.env.NODE_ENV == 'production',
    }));
    app.useGlobalFilters(new http_exection_filter_1.HttpExceptionFilter());
    const config = app.get(config_1.ConfigService);
    const port = config.get('NEST_PORT');
    await app.listen(port, () => logger.log(`App started at port: ${port}`));
}
bootstrap();
//# sourceMappingURL=main.js.map