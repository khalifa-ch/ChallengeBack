import { Schema, model } from "mongoose";

interface Employee {
  name: string;
  email: string;
  position: string;
  department?: string;
  salary: number;
}

const employeeSchema = new Schema<Employee>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  department: String,
  salary: { type: Number, required: true },
});

const EmployeeModel = model<Employee>("Employee", employeeSchema);

export default EmployeeModel;
