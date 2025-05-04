import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes.js";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(routes);


app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))