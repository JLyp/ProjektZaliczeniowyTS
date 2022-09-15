import { RequestHandler } from "express";
import { Employee } from "../models/employee";

export const createEmployee: RequestHandler = async (req, res, next) => {
    const { name, surname, position } = req.body;
  
    const createdEmployee = new Employee({
        name,
        surname,
        position,
    });
  
    try {
      await createdEmployee.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json("Employee can't be added");
    }
    res.status(201).json({ Employee: createdEmployee });
  };
  
  export const getEmployee: RequestHandler = async (req, res, next) => {
    try {
      const employee = await Employee.findById(req.params.employeeId);
      res.status(200).json(employee);
    } catch (error) {
      res.status(404).json("Employee not found");
    }
  };

  export const getAllEmployees: RequestHandler = async (req, res, next) => {
    try {
      const allEmployees = await Employee.find({});
      res.status(200).json(allEmployees);
    } catch (error) {
      res.status(500).json("Cannot list all Employees");
    }
  };
  
  export const deleteEmployee: RequestHandler = async (req, res, next) => {
    try {
      const deletedEmployee = await Employee.findByIdAndDelete(
        req.params.employeeId
      );
      res.status(204).json("resource deleted successfully");
    } catch (error) {
      res.status(404).json("Employee not found");
    }
  };

  export const editEmployee: RequestHandler = async (req, res, next) => {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.employeeId, {
        name: req.body.name,
        surname: req.body.surname,
        position: req.body.position,
      });
      res.status(200).json("Employee modified successfully");
    } catch (error) {
      res.status(404).json("Employee not found");
    }
  };