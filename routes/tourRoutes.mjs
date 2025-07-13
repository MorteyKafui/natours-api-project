import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getATour,
  updateTour,
} from "../controllers/tourControllers.mjs";

const tourRouter = express.Router();

tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getATour).patch(updateTour).delete(deleteTour);

export default tourRouter;
