const workers = require("../models/worker");

const getWorker = async (request, response) => {
  await workers
    .find()
    .then((result) => response.send(result))
    .catch((err) => response.status(400).send({ massage: err }));
};
const getWorkerById = async (request, response) => {
  await workers
    .findById(request.params.id)
    .then((result) => response.status(200).send(result))
    .catch((err) => response.status(400).send({ massage: err }));
};
const postWorker = async (request, response) => {
  await workers
    .create(request.body)
    .then((result) => response.send(result))
    .catch((err) => response.status(400).send({ massage: err }));
};
const putWorker = async (request, response) => {
  await workers
    .findByIdAndUpdate(request.params.id, request.body)
    .then((result) => response.send(result))
    .catch((err) => response.status(400).send({ massage: err }));
};
const deleteWorker = async (request, response) => {
  await workers
    .remove(request.params.id)
    .then((result) => response.send(result))
    .catch((err) => response.status(400).send({ massage: err }));
};

module.exports = {
  getWorker,
  getWorkerById,
  postWorker,
  putWorker,
  deleteWorker,
};
