import { RequestHandler } from "express";
import { Restaurant } from "../models/restaurant";

export const createRestaurant: RequestHandler = async (req, res, next) => {
    const { nazwa, adres, telefon, nip, email, www } = req.body;
  
    const createdRestaurant = new Restaurant({
      nazwa,
      adres,
      telefon,
      nip,
      email,
      www
    });
  
    try {
      await createdRestaurant.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json("Restaurant can't be added");
    }
    res.status(201).json({ Restaurant: createdRestaurant });
  };
  
  export const getRestaurant: RequestHandler = async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findById(req.params.restaurantId);
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(404).json("Restaurant not found");
    }
  };
  
  export const getAllRestaurants: RequestHandler = async (req, res, next) => {
    try {
      const allRestaurants = await Restaurant.find({});
      res.status(200).json(allRestaurants);
    } catch (error) {
      res.status(500).json("Cannot list all Restaurants");
    }
  };
  
  export const deleteRestaurant: RequestHandler = async (req, res, next) => {
    try {
      const deletedRestaurant = await Restaurant.findByIdAndDelete(
        req.params.restaurantId
      );
      res.status(204).json("resource deleted successfully");
    } catch (error) {
      res.status(404).json("Restaurant not found");
    }
  };

  export const editRestaurant: RequestHandler = async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findByIdAndUpdate(req.params.restaurantId, {
        nazwa: req.body.nazwa,
        adres: req.body.adres,
        telefon: req.body.telefon,
        nip: req.body.nip,
        email: req.body.email,
        www: req.body.www,
      });
      res.status(200).json("Restaurant modified successfully");
    } catch (error) {
      res.status(404).json("Restaurant not found");
    }
  };