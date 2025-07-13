import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, "utf-8")
);

export const checkID = (req, res, next, val) => {
  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }
  next();
};
export const checkBody = (req, res, next, val) => {
  if (!req.body.name || req.body.price) {
    return res.status(404).json({
      status: "fail",
      message: "missing name and price",
    });
  }
  next();
};

const getAllTours = (req, res) => {
  res.status(200).json({ results: tours.length, data: { tours } });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({ status: "success", data: { tour: newTour } });
    }
  );
};

const getATour = (req, res) => {
  const tourId = +req.params.id;
  const tour = tours.find(tour => tour.id === tourId);
  res.status(200).json({ results: tours.length, data: { tour } });
};

const updateTour = (req, res) => {
  res.status(201).json({ message: "DONE" });
};

const deleteTour = (req, res) => {
  res.status(204).json({ message: "DONE" });
};

export { getAllTours, getATour, createTour, updateTour, deleteTour };
