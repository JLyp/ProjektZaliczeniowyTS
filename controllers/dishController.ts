import { RequestHandler } from "express";
import { Dish } from "../models/dish";

export const createDish: RequestHandler = async (req, res, next) => {
    const { name, price, category } = req.body;
  
    const createdDish = new Dish({
        name,
        price,
        category,
    });
  
    try {
      await createdDish.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json("Dish can't be added");
    }
    res.status(201).json({ Dish: createdDish });
  };
  
  export const getDish: RequestHandler = async (req, res, next) => {
    try {
      const dish = await Dish.findById(req.params.dishId);
      res.status(200).json(dish);
    } catch (error) {
      res.status(404).json("Dish not found");
    }
  };
  
  export const getAllDishs: RequestHandler = async (req, res, next) => {
    try {
      const allDishs = await Dish.find({});
      res.status(200).json(allDishs);
    } catch (error) {
      res.status(500).json("Cannot list all Dishs");
    }
  };
  
  export const deleteDish: RequestHandler = async (req, res, next) => {
    try {
      const deletedDish = await Dish.findByIdAndDelete(
        req.params.dishId
      );
      res.status(204).json("resource deleted successfully");
    } catch (error) {
      res.status(404).json("Dish not found");
    }
  };

  export const editDish: RequestHandler = async (req, res, next) => {
    try {
      const dish = await Dish.findByIdAndUpdate(req.params.dishId, {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
      });
      res.status(200).json("Dish modified successfully");
    } catch (error) {
      res.status(404).json("Dish not found");
    }
  };