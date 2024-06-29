import Joi from "joi";

export const employeeJoiSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  position: Joi.string().required(),
  department: Joi.string().optional(),
  salary: Joi.number().min(1000).max(5000).required(),
});

export const UpdateEmployeeJoiSchema = Joi.object({
  name: Joi.string().min(2).optional(),
  email: Joi.string().email().optional(),
  position: Joi.string().optional(),
  department: Joi.string().optional(),
  salary: Joi.number().min(1000).max(5000).optional(),
});
