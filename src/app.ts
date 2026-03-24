import express, { Express } from "express";
import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";
import setupSwagger from "../src/config/swagger";

/** import the routes **/

const app: Express = express();

if (process.env.NODE_ENV === "production") {
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    app.use(consoleLogger);
}

app.use(express.json());


/** Update the api endppoints with appropriate routes **/

app.get("/api/v1/health", (req, res) => {
    res.json({ 
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });

});


app.use(errorHandler);

setupSwagger(app);

export default app;