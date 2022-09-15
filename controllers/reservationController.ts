import { RequestHandler } from "express";
import { Reservation } from "../models/reservation";

export const createReservation: RequestHandler = async (req, res, next) => {
    const { start, end, client } = req.body;
  
    const createdReservation = new Reservation({
      start,
      end,
      client,
    });
  
    try {
      await createdReservation.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json("Reservation can't be added");
    }
    res.status(201).json({ Reservation: createdReservation });
  };
  
  export const getReservation: RequestHandler = async (req, res, next) => {
    try {
      const reservation = await Reservation.findById(req.params.reservationId);
      res.status(200).json(reservation);
    } catch (error) {
      res.status(404).json("Reservation not found");
    }
  };
  
  export const getAllReservations: RequestHandler = async (req, res, next) => {
    try {
      const allReservations = await Reservation.find({});
      res.status(200).json(allReservations);
    } catch (error) {
      res.status(500).json("Cannot list all Reservations");
    }
  };
  
  export const deleteReservation: RequestHandler = async (req, res, next) => {
    try {
      const deletedReservation = await Reservation.findByIdAndDelete(
        req.params.reservationId
      );
      res.status(204).json("resource deleted successfully");
    } catch (error) {
      res.status(404).json("Reservation not found");
    }
  };

  export const editReservation: RequestHandler = async (req, res, next) => {
    try {
      const reservation = await Reservation.findByIdAndUpdate(req.params.reservationId, {
        start: req.body.start,
        end: req.body.end,
        client: req.body.client,
      });
      res.status(200).json("Reservation modified successfully");
    } catch (error) {
      res.status(404).json("Reservation not found");
    }
  };