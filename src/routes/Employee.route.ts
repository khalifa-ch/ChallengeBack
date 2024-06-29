import { Router } from 'express';
import { addEmployee, updateEmployee, deleteEmployee } from '../controllers/Employee.controller';

const employeeRouter = Router();

employeeRouter.post('/employees', addEmployee);
employeeRouter.put('/employees/:_id', updateEmployee);
employeeRouter.delete('/employees/:_id', deleteEmployee);

export default employeeRouter;
