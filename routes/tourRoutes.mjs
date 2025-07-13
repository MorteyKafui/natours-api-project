import express from "express";
import {
  checkBody,
  checkID,
  createTour,
  deleteTour,
  getAllTours,
  getATour,
  updateTour,
} from "../controllers/tourControllers.mjs";

const tourRouter = express.Router();

tourRouter.param("id", checkID);

tourRouter.route("/").get(getAllTours).post(checkBody, createTour);
tourRouter.route("/:id").get(getATour).patch(updateTour).delete(deleteTour);

export default tourRouter;
