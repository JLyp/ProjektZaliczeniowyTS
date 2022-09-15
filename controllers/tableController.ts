import { RequestHandler } from "express";
import { Table } from "../models/table";

export const createTable: RequestHandler = async (req, res, next) => {
    const { name, noOfPeople, status } = req.body;
  
    const createdTable = new Table({
        name,
        noOfPeople,
        status,
    });
  
    try {
      await createdTable.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json("Table can't be added");
    }
    res.status(201).json({ Table: createdTable });
  };
  
  export const getTable: RequestHandler = async (req, res, next) => {
    try {
      const table = await Table.findById(req.params.tableId);
      res.status(200).json(table);
    } catch (error) {
      res.status(404).json("Table not found");
    }
  };
  
  export const getAllTables: RequestHandler = async (req, res, next) => {
    try {
      const allTables = await Table.find({});
      res.status(200).json(allTables);
    } catch (error) {
      res.status(500).json("Cannot list all Tables");
    }
  };
  
  export const deleteTable: RequestHandler = async (req, res, next) => {
    try {
      const deletedTable = await Table.findByIdAndDelete(
        req.params.tableId
      );
      res.status(204).json("resource deleted successfully");
    } catch (error) {
      res.status(404).json("Table not found");
    }
  };

  export const editTable: RequestHandler = async (req, res, next) => {
    try {
      const table = await Table.findByIdAndUpdate(req.params.tableId, {
        name: req.body.name,
        noOfPeople: req.body.noOfPeople,
        status: req.body.status,
      });
      res.status(200).json("Table modified successfully");
    } catch (error) {
      res.status(404).json("Table not found");
    }
  };