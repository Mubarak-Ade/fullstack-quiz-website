// Path: server/routes/authRoute.js
import express from 'express'
import { register, login } from "../controllers/authController.js"

const router = express.Router()

// Add routes
router.post('/register', register);
router.post('/login', login);
// routes.get('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default router;
