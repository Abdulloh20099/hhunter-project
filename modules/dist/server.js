"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_js_1 = require("./auth/router/auth.router.js");
const category_roouter_js_1 = require("./category/router/category.roouter.js");
const admin_router_js_1 = require("./admin/router/admin.router.js");
require("dotenv/config");
require("./utils/db.connection.conf.js");
const job_router_js_1 = require("./jobs/router/job.router.js");
async function started() {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        ///Rouetrs
        app.use(auth_router_js_1.AuthRouter);
        app.use(category_roouter_js_1.categoryRouter);
        app.use(admin_router_js_1.adminRouter);
        app.use(job_router_js_1.routerJobs);
        app.listen(process.env.APP_PORT, () => {
            console.log(`running ${process.env.APP_PORT}...`);
        });
    }
    catch (error) {
        console.log({ status: 500, errorMsg: error.message });
    }
}
started();
