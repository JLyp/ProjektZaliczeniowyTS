import { RequestHandler } from "express";
import { Dish } from "../models/dish";
import { Employee } from "../models/employee";
import { Order } from "../models/order";
import { Table } from "../models/table";

export const createOrder: RequestHandler = async (req, res, next) => {
    const { price } = req.body;

    const employee = await Employee.findById(req.params.employeeId);
    if (!employee) return res.status(404).json("Employee not found");

    const dish = await Dish.findById(req.params.dishId);
    if (!dish) return res.status(404).json("Dish not found");

    const table = await Table.findById(req.params.tableId);
    if (!table) return res.status(404).json("Table not found");

    const createdOrder = new Order({
        employee,
        dish,
        table,
        price
    });
  
    try {
      await createdOrder.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json("Order can't be added");
    }
    res.status(201).json({ Order: createdOrder });
  };
  
  export const getOrder: RequestHandler = async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.orderId);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json("Order not found");
    }
  };
  
  export const getAllOrders: RequestHandler = async (req, res, next) => {
    try {
      const allOrders = await Order.find({});
      res.status(200).json(allOrders);
    } catch (error) {
      res.status(500).json("Cannot list all Orders");
    }
  };
  
  export const deleteOrder: RequestHandler = async (req, res, next) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(
        req.params.orderId
      );
      res.status(204).json("resource deleted successfully");
    } catch (error) {
      res.status(404).json("Order not found");
    }
  };

  export const editOrder: RequestHandler = async (req, res, next) => {
    try {
      const order = await Order.findByIdAndUpdate(req.params.orderId, {
        employee: req.body.employee,
        dish: req.body.dish,
        table: req.body.table,
        price: req.body.price,
      });
      res.status(200).json("Order modified successfully");
    } catch (error) {
      res.status(404).json("Order not found");
    }
  };