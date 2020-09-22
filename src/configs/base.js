require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const baseRouter = require("../routes/api");

const port = process.env.PORT || 3000;
const base = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/api", baseRouter);
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {};
    const status = error.status || 500;

    return res.status(status).json({
      error: {
        message: err.message,
        code: status,
      },
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

module.exports = base;
