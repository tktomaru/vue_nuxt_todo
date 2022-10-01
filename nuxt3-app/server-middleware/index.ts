import express from "express";

const app = express()

app.use(express.json())

import * as indexRouter from "./routes/index";

app.use("/index", indexRouter.index);

export default app
