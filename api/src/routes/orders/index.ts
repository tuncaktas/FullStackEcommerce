import { Router } from "express";
import { createOrder } from './ordersController.js'
import { validateData } from "../../middlewares/validationMiddleware.js";
import { insertOrderSchema } from "../../db/ordersSchema.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post('/', verifyToken, validateData(insertOrderSchema), createOrder);

export default router;