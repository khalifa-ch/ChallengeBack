import { Request, Response } from "express";
import Employee from "../models/Employee.model";
import { UpdateEmployeeJoiSchema, employeeJoiSchema } from "../validators/validationSchemas";

// Add a new employee
export const addEmployee = async (req: Request, res: Response) => {
  try {
    // Validate the request body using Joi
    const { error } = employeeJoiSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email } = req.body;

    // Check if the email is already in use
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    // If email is not in use, proceed to create the new employee
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).send(newEmployee);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Update an existing employee's details
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    // Validate the request body using Joi
    const { error } = UpdateEmployeeJoiSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const employee = await Employee.findByIdAndUpdate(
      req.params._id,
      req.body,
      {
        new: true,
        runValidators: true,  // Ensures that the validation is run again
      }
    );

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.send(employee);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

// Delete an employee by ID
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params._id);
    if (!employee) {
      return res.status(400).json({ error: "employee not found" });
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};
