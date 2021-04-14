import express = require("express");
import { Express, json } from "express";

const setupApplication = (): Express => {
    const app = express();

    app.use(json())

    return app;
}

export const exampleApp = setupApplication();