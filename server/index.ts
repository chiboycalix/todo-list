import express from "express";
import router from "routes/todo";
import bodyParser from "body-parser";
import { errorHandler } from "services/errorService";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;

app.use(router);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export { app };
