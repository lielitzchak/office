
const workersRouter = require("express").Router();
const workerHandler = require("../controllers/workers-controllers");

workersRouter.get("/", workerHandler.getWorker);
workersRouter.get("/:id", workerHandler.getWorkerById);
workersRouter.post("/", workerHandler.postWorker);
workersRouter.put("/:id", workerHandler.putWorker);
workersRouter.delete("/", workerHandler.deleteWorker);

module.exports = workersRouter;
