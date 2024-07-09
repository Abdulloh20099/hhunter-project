import express, { Application } from "express";
import { AuthRouter } from "./auth/router/auth.router.js";
import { categoryRouter } from "./category/router/category.roouter.js";
import { adminRouter } from "./admin/router/admin.router.js";
import "dotenv/config";
import "./utils/db.connection.conf.js";
import { routerJobs } from "./jobs/router/job.router.js";

async function started(): Promise<void> {
  try {
    const app: Application = express();
    app.use(express.json());

    ///Rouetrs

    app.use(AuthRouter);
    app.use(categoryRouter);
    app.use(adminRouter);
    app.use(routerJobs);

    app.listen(process.env.APP_PORT, () => {
      console.log(`running ${process.env.APP_PORT}...`);
    });
  } catch (error: any) {
    console.log({ status: 500, errorMsg: error.message });
  }
}

started();
