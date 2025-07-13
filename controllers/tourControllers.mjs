import Tour from "../models/tourModel.mjs";

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "Operation Successful",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Operation failure",
      message: error,
    });
  }
};

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(201).json({
      status: "Operation Successful",
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Operation failure",
      message: error,
    });
  }
};

const getATour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(201).json({
      status: "Operation Successful",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Operation failure",
      message: error,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: "Operation Successful",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Operation failure",
      message: error,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: "Operation Successful",
      data: [],
    });
  } catch (error) {
    res.status(400).json({
      status: "Operation failure",
      message: error,
    });
  }
};

export { getAllTours, getATour, createTour, updateTour, deleteTour };
