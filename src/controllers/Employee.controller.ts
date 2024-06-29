import { Request, Response } from "express";
import Employee from "../models/Employee.model";

// Add a new employee
export const addEmployee = async (req: Request, res: Response) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update an existing employee's details
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params._id,
      req.body,
      {
        new: true,
      }
    );
    if (!employee) {
      return res.status(404).send("employee not found");
    }
    res.send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an employee by ID
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params._id);
    if (!employee) {
      return res.status(404).send(" employee not found");
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};
