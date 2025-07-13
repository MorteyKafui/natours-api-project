import express from "express";
import {
  aliasTopTours,
  createTour,
  deleteTour,
  getAllTours,
  getATour,
  getMonthlyPlan,
  getToursStats,
  updateTour,
} from "../controllers/tourControllers.mjs";

const tourRouter = express.Router();

tourRouter.route("/top-5-cheap").get(aliasTopTours, getAllTours);
tourRouter.route("/tour-stats").get(getToursStats);
tourRouter.route("/monthly-plan/:year").get(getMonthlyPlan);
tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getATour).patch(updateTour).delete(deleteTour);

export default tourRouter;
